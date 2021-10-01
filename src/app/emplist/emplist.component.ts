import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';
import { EmpService } from '../Services/emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  employees : Employee[]=[]
  constructor(private ser:EmpService) { }

  ngOnInit(): void {
    this.employees = this.ser.getAllEmployees();
  }
  

}
