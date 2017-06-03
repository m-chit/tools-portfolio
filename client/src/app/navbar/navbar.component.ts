import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    dropdownShow = false;

    constructor(private authService: AuthService) {
    }

    DropdownShow() {
        return this.dropdownShow = !this.dropdownShow;
    }

    logOut() {
        this.authService.logOut();
    }
}
