import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../shared/service/user.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public password: string;
  public confirmPwd: any;
  public pwd: any;
  public isSubmitted = false;
  public message: string;
  // public errorMessage: string;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      pseudo: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.minLength(8)]],
      birth: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      grade: ['', [Validators.required]]
    });

    this.registerForm.setValidators(this.comparisonValidator());

  }

  public comparisonValidator(): any {
      return (group: FormGroup): any => {
        const control1 = group.controls.password;
        const control2 = group.controls.confirmPassword;
        if (control1.value !== control2.value) {
          control2.setErrors({isNoMatch: true});
        } else {
          control2.setErrors(null);
        }
        return;
    };
  }

public submit(): void {
  this.isSubmitted = true;
  if (this.registerForm.valid) {
    this.userService.register(this.registerForm.value).subscribe(
      (user: User) => {
        this.message = 'Votre compte vient d\'être crée. Vous pouvez maintenant vous connecter.';
        this.router.navigate(['/']);
    },
      err => {
        console.log('Erreur inscription', err);
        if (err.status === 401) {
          // this.errorMessage = 'Un compte avec cette adresse mail existe déjà.';
          this.message = 'Un compte avec cette adresse mail existe déjà.';
        } else {
          // this.errorMessage = 'Une erreur c\'est produite. impossible de créer un compte.';
          this.message = 'Une erreur c\'est produite. impossible de créer un compte.';
        }
    });
  }
}


}
