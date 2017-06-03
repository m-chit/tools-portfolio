import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    @ViewChild('f') form: NgForm;

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit() {
    }

    onSubmit() {

        this.router.navigate(['/']);
    }
}
