import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../app/services/currency-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this line

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
})
export class CurrencyConverterComponent implements OnInit {
  currencies: [string, string][] = [];
  result: string = '';
  conversionRate: number = 0;
  error: string = '';
  isLoading: boolean = false;
  amount: number = 0;
  toCurrency: string = ''; // Add this line
  fromCurrency: string = ''; // Add this line
  currencyList: { code: string; name: string }[] = []; // Add this line
  rates: { [key: string]: number } = {}; // Add this line

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencies = this.currencyService.getCurrencies();
    this.getAllRates();
  }

  getAllRates() {
    this.currencyService.getAllRates().subscribe((res) => {
      console.log(res);
      this.rates = res.rates; // Store the rates
      this.currencyList = Object.keys(res.rates).map(code => ({
        code,
        name: this.currencies.find(([currencyCode]) => currencyCode === code)?.[1] || code
      }));
    });
  }

  convert(): void {
    this.isLoading = true;
    const fromRate = this.rates[this.fromCurrency];
    const toRate = this.rates[this.toCurrency];

    if (fromRate && toRate) {
      this.conversionRate = toRate / fromRate;
      this.result = `${this.amount} ${this.fromCurrency} = ${this.amount * this.conversionRate} ${this.toCurrency}`;
      this.isLoading = false;
    } else {
      this.error = 'Error fetching conversion rate';
      this.isLoading = false;
    }
  }

  swapCurrencies(): void {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
  }
}
