import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {AuthService} from './auth.service';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminGuardianService implements CanActivate {

    constructor(private http: Http, private authService: AuthService, private router: Router) {
    }

    canActivate() {
        const token = this.authService.isAuthorised() ? '?token=' + localStorage.getItem('token') : '';
        return this.http.get('/api/users' + token).map(
            response => {
                if (response.status !== 401 && response.json().admin === true) {
                    return true;
                } else {
                    this.router.navigate(['/landing']);
                    return false;
                }
            },
            error => {
                this.router.navigate(['/landing']);
                return false;
            }
        ).catch(
            error => {
                this.router.navigate(['/landing']);
                return Observable.of(false);
            }
        );

    }

}
