import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularPrj';
  fname : string;
  firstnum:number;
  secondnum:number;
  result:number;

  constructor(){
    this.fname = "";
    this.firstnum = 0;
    this.secondnum= 0;
    this.result = 0;
  }
  AddNum():void{
    {{debugger}}
this.result = this.firstnum+this.secondnum;
console.log(this.result);
  }
  sum(a:string,b:string):void{
    {{debugger}}
this.result = Number(a)+Number(b);
console.log(this.result);
  }
}
