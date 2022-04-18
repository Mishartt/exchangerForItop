import { Component, OnInit } from '@angular/core';
import { ExchangerService } from '../shared/exchanger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public exchangerSeervice:ExchangerService) { }

  public headerRates = this.exchangerSeervice.exchangeRates.filter(el => el.cc.includes('EUR') || el.cc.includes('USD'))
  
  ngOnInit(): void {

  }

}
