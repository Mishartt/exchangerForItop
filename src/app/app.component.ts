import { Component } from '@angular/core';
import { ExchangerService } from './shared/exchanger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exchanger';

  public loading = true;
  
  constructor(private exchangerService:ExchangerService){}

  ngOnInit(){
    this.exchangerService.fetchExchangeRates().subscribe(() => {
      this.loading = false;
    })
  }

}
