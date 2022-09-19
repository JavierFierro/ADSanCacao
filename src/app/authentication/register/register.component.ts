import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';


const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = Object.create(null);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required])
      ],
      password: password,
      confirmPassword: confirmPassword
    });
  }

  onSubmit() {
    this.authService.signUp(this.form.value.email, this.form.value.password)
      .then(() => {
        this.snackBar.open('Registro de cuenta exitosa', 'Ok!', {
          duration: 5000,
        });
        this.router.navigate(['']);
      }).catch((error) => console.log(error));
  }
}
