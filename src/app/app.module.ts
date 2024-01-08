// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { NumberConverterComponent } from './number-converter/number-converter.component';
// import { NumberToWordsPipe } from './number-to-words.pipe';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NumberConverterComponent,
//     NumberToWordsPipe
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// src/app/app.module.ts

// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberToWordsPipe } from './number-to-words.pipe'; // Adjust the path based on your project structure

import { AppComponent } from './app.component';
import { NumberConverterComponent } from './number-converter/number-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberConverterComponent,
    NumberToWordsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NumberToWordsPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

