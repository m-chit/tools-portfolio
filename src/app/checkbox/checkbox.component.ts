import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  checkbox = false;
  @Output() checkboxChange = new EventEmitter<boolean>();

  clickCheckbox() {
    this.checkbox = !this.checkbox;
    this.checkboxChange.emit(this.checkbox);
  }
}
