import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  checkbox = false;

  constructor() {
  }

  ngOnInit() {
  }

  clickCheckbox() {
    this.checkbox = !this.checkbox;
  }

}
