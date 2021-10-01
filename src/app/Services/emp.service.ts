import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
emplist:Employee[]=[
  {
    eid:2,
    ename:"Achal",
    esalary:20000,
    photourl:"assets/Images/bill.jpg"
  },
  {
    eid:3,
    ename:"Binod",
    esalary:25000,
    photourl:"assets/Images/elon.jpg"
  },
  {
    eid:2,
    ename:"Raj",
    esalary:15000,
    photourl:"assets/Images/mark.jpg"
  }
];
  constructor() { 
  }
  getAllEmployees():Employee[]{
    return this.emplist
  }
}
