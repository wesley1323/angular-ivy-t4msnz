import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BitCoinRate {
  time: {
    updated: string;
  };
  bpi: {
    USD: {
      rate_float: number;
    };
    BRL: {
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  bitCoinRates: Array<BitCoinRate> = [];

  constructor(private http: HttpClient) {
    this.updatedBitCoinRates();
  }

  updatedBitCoinRates() {
    setInterval(() => {
      this.http
        .get<BitCoinRate>(
          'https://api.coindesk.com/v1/bpi/currentprice/BRL.json'
        )
        .subscribe((data) => {
          this.bitCoinRates.push(data);
        });
    }, 60000);
  }
}
