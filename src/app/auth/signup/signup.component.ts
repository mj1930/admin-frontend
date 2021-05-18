import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitFormAttempt: boolean = false;
  mobile = null;
  registerSteps = {
    step1: true,
    step2: false,
    step3: false
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
    private toaster: ToastService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submitRegisterForm(valid) {
    this.submitFormAttempt = true;
    if (!valid) {
      return;
    }
    let reqData = {
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
      phone: this.registerForm.controls['phone'].value
    }

    this.authService.register(reqData).subscribe((data: any) => {
      this.toaster.openSnackbar(data.message);
      if (data.code === 200) {
        this.router.navigateByUrl('/auth/login');
      } else {

      }
    }, error => {
      console.log(error);
    })
  }
}
