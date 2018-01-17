import { Component, OnInit } from '@angular/core';
import { ParkingRate } from './parking-rate';
import { RateCalculatorService } from './rate-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Welcome to Abc Car Park';
  entryDate:Date;
  exitDate:Date;
  parkingRate:ParkingRate;
  constructor(private rateCalculatorService: RateCalculatorService) { }

  ngOnInit() {
  }

  getRates(): void {
    this.rateCalculatorService.getRates(this.entryDate,this.exitDate)
      .subscribe(rateInfo => this.parkingRate = rateInfo);
  }
  submit(): void {
    console.log('Data submitted! Entry date: ' + this.entryDate + " Exit date: " + this.exitDate)
    this.getRates();
  }
}
