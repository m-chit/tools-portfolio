import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Http} from '@angular/http';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    dropdownShow = false;
    isAdmin = false;
    constructor(private authService: AuthService, private http: Http) {
    }

    ngOnInit() {
        const token = this.authService.isAuthorised() ? '?token=' + localStorage.getItem('token') : '';
        this.http.get('/api/users' + token).subscribe(
            response => this.isAdmin = response.json().admin
        );
    }

    DropdownShow() {
        return this.dropdownShow = !this.dropdownShow;
    }

    logOut() {
        this.authService.logOut();
    }
}
