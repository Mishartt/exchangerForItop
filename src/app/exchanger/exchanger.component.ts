import { Component, OnInit } from '@angular/core';
import { ExchangerService } from '../shared/exchanger.service';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.scss']
})
export class ExchangerComponent implements OnInit {

  constructor(public exchangerService:ExchangerService) {}

  title1:any = ''
  title2:any = ''

  currency1:any = '1'
  currency2:any = this.exchangerService.exchangeRates[0].rate
  

  change(){
    if(this.title1 == ''){
      this.title2 = ''
      return
    }
    this.title2 = (this.currency1 / this.currency2 * this.title1).toFixed(2)
  }

  change2(){
    if(this.title1 == ''){
      this.title2 = ''
      return
    }
    this.title2 = (this.currency1 / this.currency2 * this.title1).toFixed(2)
    
  }
  
  input1(value:string){
    if(value == ''){
      this.title2 = ''
      return
    }
    this.title2 = (this.currency1 / this.currency2 * Number(value)).toFixed(2)
  }

  input2(value:string){ 
    if(value == ''){
      this.title1 = ''
      return
    }
    this.title1 = (this.currency2 / this.currency1 * Number(value)).toFixed(2)
  }
  
  
  ngOnInit(): void {
  }

}
