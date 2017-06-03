import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-modal-alert',
    templateUrl: './modal-alert.component.html',
    styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent {
    @Input() isHidden = true;
    @Input() text: string;
}
