import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  searchQuerry(frm) {
    console.log(frm.value);
    var flnumber = frm.flightNumber;
    var orignCity = frm.origncity;
    var destiCity = frm.destinationcity;
    var querryDate = new Date(frm.querrydate);
    
  }


  constructor() { }

  ngOnInit() {

  }

}
