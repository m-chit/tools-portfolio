import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import {UserModel} from '../../models/user.model';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    @ViewChild('f') form: NgForm;

    constructor(private authService: AuthService, private router: Router) {
    }

    onSubmit() {
        const user = new UserModel(this.form.value.username, this.form.value.email, this.form.value.password);
        this.authService.signUp(user).subscribe(
            response => {
                const token = response.json().id_token;
                localStorage.setItem('token', token);
                this.router.navigate(['/']);
            }, error => console.log(error)
        );
    }
}
