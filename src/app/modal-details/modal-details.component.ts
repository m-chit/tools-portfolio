import {Component, Input} from '@angular/core';
import {ToolModel} from '../models/tool.model';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent {
  @Input('Tool') tool: ToolModel;
  hidden = true;
  showModal() {
    this.hidden = false;
    console.log('show');
  }

  hiddenModal() {
    this.hidden = true;
   console.log('destroy');
  }


}
