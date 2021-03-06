import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginAttempt: boolean;
  loginError = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, 
    private toaster: ToastService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
    if(JSON.parse(localStorage.getItem('remember'))) {
      this.loginForm.controls['rememberMe'].setValue(true);
      this.loginForm.controls['email'].setValue(localStorage.getItem('email')) ;
      this.loginForm.controls['password'].setValue(localStorage.getItem('password')) 
    }
  }

  login(valid) {
    this.loginAttempt = true;
    if (!valid) {
      return;
    }
    let reqData = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }

    this.authService.login(reqData).subscribe((data: any) => {
      if(data.code === 200) {
        sessionStorage.setItem('token', data['accessToken']);
        localStorage.setItem('user', JSON.stringify(data['data']));
        if(this.loginForm.controls['rememberMe'].value) {
          localStorage.setItem('remember', JSON.stringify(true));
          localStorage.setItem('email', this.loginForm.controls['email'].value);
          localStorage.setItem('password', this.loginForm.controls['password'].value);
        } else {
          localStorage.setItem('remember', JSON.stringify(false));
          localStorage.setItem('email', "");
          localStorage.setItem('password', "");
        }
        let user = data['data'];
        if (user.permissions && user.permissions.permissions.length)
          this.router.navigateByUrl('/seller');
        else
          this.router.navigateByUrl('/unverified');
    } else {
      this.toaster.openSnackbar(data.message);
    }
    }, error => {
      console.log(error);
    })
  }


}
