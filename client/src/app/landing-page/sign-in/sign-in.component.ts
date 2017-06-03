import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    @ViewChild('f') form: NgForm;

    constructor(private authService: AuthService, private router: Router) {
    }

    onSubmit() {
        const body = {
            'usernameOrEmail': this.form.value.usernameOrEmail,
            'password': this.form.value.password
        };
        this.authService.signIn(body).subscribe(
            response => {
                const token = response.json().id_token;
                localStorage.setItem('token', token);
                this.router.navigate(['/']);
            }
        );
    }
}
