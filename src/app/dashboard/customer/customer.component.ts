import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

export interface PeriodicElement {
  id:string;
  name: string;
  address:string;
  salary: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: "C001", name: 'Chathumal', address: "Panadura", salary: 2344000},
  {id: "C002", name: 'Udara', address: "Kandy", salary: 235235.54},
  {id: "C003", name: 'Udara', address: "Kandy", salary: 235235.54},
  {id: "C004", name: 'Udara', address: "Kandy", salary: 235235.54},
  {id: "C005", name: 'Udara', address: "Kandy", salary: 235235.54},
  {id: "C006", name: 'Udara', address: "Kandy", salary: 235235.54},

];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'address', 'salary','operate'];
  dataSource = ELEMENT_DATA;
  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  loadData(id: any) {
    this._route.navigate(['/customer/detail',id]).then(response=>{
      console.log(response)
    },error=>{
      console.log(error)
    })
  }

}
