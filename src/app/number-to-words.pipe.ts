import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {
  private units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  private teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  private tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  transform(value: number): string {
    if (value === 0) {
      return 'Zero';
    }

    if (value === 1000000) {
      return 'Ten Lakh';
    }

    if (value < 10) {
      return this.units[value];
    }
    
    if (value === 10){
       return 'ten';
    }

    if (value < 20) {
      return this.teens[value - 11];
    }

    if (value < 100) {
      return this.tens[Math.floor(value / 10)] + ' ' + this.units[value % 10];
    }

    if (value < 1000) {
      return this.units[Math.floor(value / 100)] + ' Hundred ' + this.transform(value % 100);
    }

    if (value < 100000) {
      const thousands = Math.floor(value / 1000);
      const remainder = value % 1000;

      return (
        this.transform(thousands) + ' Thousand ' + (remainder !== 0 ? this.transform(remainder) : '')
      );
    }

    if (value < 10000000) {
      const lakhs = Math.floor(value / 100000);
      const remainder = value % 100000;

      return (
        this.transform(lakhs) + ' Lakh ' + (remainder !== 0 ? this.transform(remainder) : '')
      );
    }
    return 'Number is too large';
  }
}

