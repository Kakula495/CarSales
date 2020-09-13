import { Component, Inject, OnInit } from '@angular/core';
import { Car } from '../Models/car.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Car[];
  data: Car;

  ngOnInit() { 
  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private _router: Router) {
    http.get<Car[]>(baseUrl + 'carsales').subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }

  removeCars(id: number) {

  }
  addCars() {
    this._router.navigateByUrl('/add-data');  // Invoke AddData component
  } 
}
