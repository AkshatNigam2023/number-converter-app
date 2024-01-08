// src/app/number-converter/number-converter.component.ts
import { Component } from '@angular/core';
import { NumberToWordsPipe } from '../number-to-words.pipe'; // Adjust the path based on your project structure

@Component({
  selector: 'app-number-converter',
  templateUrl: './number-converter.component.html',
  styleUrls: ['./number-converter.component.scss']
})
export class NumberConverterComponent {
  inputNumber: number = 0;
  convertedText: string = '';

  constructor(private numberToWords: NumberToWordsPipe) {}

  convertNumber() {
    this.convertedText = this.inputNumber ? this.numberToWords.transform(this.inputNumber) : '';
  }
}
