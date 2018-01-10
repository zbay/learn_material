import { Component, OnInit } from '@angular/core';
import {Address} from '../models/address';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  address: Address;

  constructor() {
    this.address = new Address();
   }

  ngOnInit() {
  }

  onSubmit(){
    alert(this.address.firstname);
  }

}
