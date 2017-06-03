import {Component, OnInit} from '@angular/core';
import {AlertService} from '../services/alert.service';

@Component({
    selector: 'app-modal-alert',
    templateUrl: './modal-alert.component.html',
    styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent implements OnInit {
    isHidden = true;
    text: string;

    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.alertService.showSubject.subscribe(
            text => {
                this.text = text;
                this.isHidden = false;
                setTimeout(() => this.closeModal(), 5000);
            }
        );
    }

    closeModal() {
        this.isHidden = true;
    }
}
