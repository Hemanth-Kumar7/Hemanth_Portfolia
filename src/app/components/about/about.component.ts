import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  disedu=false;
  disskills=false;
  //edu fun
  edu(){
    if(this.disedu==true){
      this.disedu=false;
      this.disskills=false;
    }
    else {
      this.disedu=true;
      this.disskills=false;
    }
  }
  //skills fun
  skills(){
    if(this.disskills==true){
      this.disedu=false;
      this.disskills=false;
    }
    else {
      this.disskills=true;
      this.disedu=false;
    }
  }
}
