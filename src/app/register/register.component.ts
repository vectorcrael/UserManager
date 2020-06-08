import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import { CrudService } from '../crud/crud.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    formError = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthService,
        private userService: CrudService,
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.isLoggedIn()) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            role:['regular'],
            token:['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjEyMTIxMSIsIm5hbWUiOiJFbHJveSBOeW9uaSIsImlhdCI6MTUxNjIzOTAyMn0.HZtm0Czx0QK4DIhpU--X9jM1g_GSvUdATqDMXoCMpJg']
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.formError = true;
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                    this.formError = true;
                });
    }
}

