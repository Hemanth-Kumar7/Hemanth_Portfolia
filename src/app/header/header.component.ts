import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  show = false;
  //fun call
  fun() {
    if (this.show == true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
