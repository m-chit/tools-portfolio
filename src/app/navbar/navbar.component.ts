import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownShow = false;

  DropdownShow() {
    return this.dropdownShow = !this.dropdownShow;
  }
}
