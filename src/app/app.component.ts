import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(public bitCoin: BitcoinService) {}

  ngOnInit() {}

  updatedBitCoinRates() {
    this.bitCoin.updatedBitCoinRates();
  }
}
