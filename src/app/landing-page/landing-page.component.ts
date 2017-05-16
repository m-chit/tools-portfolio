import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  height = window.innerHeight;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onResize(event) {
    this.height = event.target.innerHeight;
  }

  getPx() {
    return `${this.height}px`;
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
  }
}
