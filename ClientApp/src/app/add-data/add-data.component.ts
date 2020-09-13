import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../Models/car.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-data',
  templateUrl: 'add-data.component.html',
  styles: ['add-data.component.css']
})
export class AddDataComponent implements OnInit{
  public cars: Car[];
  storage: any;
  myform: FormGroup;
  vehicleType: FormControl;
  engine: FormControl;
  doors: FormControl;
  wheels: FormControl;
  bodyType: FormControl;
  make: FormControl;
  carModel: FormControl;
  id: FormControl;
  showSuccess: boolean;
    baseUrl: string;

  constructor(private _router: Router, private http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
    this.baseUrl = _baseUrl;
  }

  ngOnInit() {
    this.createFormControls();
    this.inItForm();
    this.storage = sessionStorage;
    this.showSuccess = false;
    console.log(this.storage);
  }

  // Init form controls
  inItForm() {
    this.myform = new FormGroup({
      vehicleType: this.vehicleType,
      engine: this.engine,
      doors: this.doors,
      wheels: this.wheels,
      bodyType: this.bodyType,
      make: this.make,
      carModel: this.carModel,
      id:this.id
    });
  }

  //Create Form page
  createFormControls() {
    this.vehicleType = new FormControl('', Validators.required);
    this.engine = new FormControl('', Validators.required);
    this.doors = new FormControl(4);
    this.wheels = new FormControl(4);
    this.bodyType = new FormControl('', Validators.required);
    this.make = new FormControl('', Validators.required);
    this.carModel = new FormControl('', Validators.required);
    this.engine = new FormControl('', Validators.required);
    this.id = new FormControl(Math.abs((Math.floor(Math.random() * 200) - 100)));
  }

  //Submit Data
  onSubmit() {
    if (this.myform.valid) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      this.http.post(this.baseUrl + 'carsales/save', JSON.stringify(this.myform.value), { 'headers': headers }).subscribe(
        data => {
          this.showSuccess = true; 
          },
          error => {
            console.log(error);
          }
        )
      console.log(this.myform.value);
      window.sessionStorage.setItem('cars', JSON.stringify(this.myform.value));
    }
  }
  // Reset Data
  resetTheForm(): void {
    this.myform.reset();
    this.showSuccess = false;
  }
  onBackClick() {
    this._router.navigate(['/']);
  }
}
