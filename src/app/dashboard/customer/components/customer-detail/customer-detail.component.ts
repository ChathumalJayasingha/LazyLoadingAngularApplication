import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerId: any;

  constructor(private _activatedRoute:ActivatedRoute, private _route:Router) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(response=>{
      this.customerId=response.get('id');
    },error => {
      console.log(error);
    });

  }


  navigateToRoute() {
    this._route.navigate(['/customer/detail/' + this.customerId + '/salaryDetail']).then(
      r => {
        alert(r)
      },error=>{
        alert(error)
      });
  }
}
