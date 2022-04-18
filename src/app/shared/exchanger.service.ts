import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { tap } from "rxjs/operators";

export interface IExchangeRates {
    rate:number
    cc:string
    // buy:number
    // sale:number
}

@Injectable({providedIn:'root'})
export class ExchangerService {

    constructor(private http:HttpClient){}

    public exchangeRates:IExchangeRates[] = []

    fetchExchangeRates(){
       return this.http.get<IExchangeRates[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .pipe(tap(exRts => this.exchangeRates = exRts))
    }


}