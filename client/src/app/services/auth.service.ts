import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    constructor(private http: Http, private router: Router) {
    }

    signIn(body: { usernameOrEmail: string, password: string }) {
        return this.http.post('/api/users/authenticateUser', body);
    }

    signUp() {

    }

    logOut() {
        localStorage.clear();
        this.router.navigate(['/landing']);
    }

    isAuthorised() {
        return localStorage.getItem('token') !== null;
    }
}
