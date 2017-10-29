import { Component, HostBinding } from '@angular/core';

const Keys = [1,2,3,4,5,6,7,8,9,0];      //array keys

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pin: string = "";  
  typeField: string = "number";       //type input
  keys = Keys;

  hidePin(): void {       //hide or show characters in the field
    this.typeField = (this.typeField == "number") ? "password" : "number";
  }

  compareRandom() {         //mix array
    return Math.random() - 0.5;
  }

  getKey(key:string):void {     //get the pressed button
    this.keys = this.keys.sort(this.compareRandom);
    this.pin += key; 
  }

  onCansel(): void {
    this.pin = this.pin.slice(0,-1);
  }

  onClear():void {
    this.pin = "";
  }

  onEnter(): void {
    alert(this.pin);
  }
}
