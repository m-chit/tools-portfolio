import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AlertService {
    showSubject = new Subject<string>();

    showModal(text: string) {
        this.showSubject.next(text);
    }
}
