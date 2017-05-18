import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeHome = true;
  activeFavorite = false;
  constructor() {
  }

  ngOnInit() {
  }

  isActive() {
    this.activeHome = !this.activeHome;
    this.activeFavorite = !this.activeFavorite;
  }
}
