import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {UserModel} from '../models/user.model';

@Injectable()
export class AuthService {
    constructor(private http: Http, private router: Router) {
    }

    signIn(body: { usernameOrEmail: string, password: string }) {
        return this.http.post('/api/users/authenticateUser', body);
    }

    signUp(user: UserModel) {
        return this.http.post('/api/users', user);
    }

    logOut() {
        localStorage.clear();
        this.router.navigate(['/landing']);
    }

    isAuthorised() {
        return localStorage.getItem('token') !== null;
    }
}
