import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


// SERVICE
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, OnDestroy {
  public editProfileForm: FormGroup;
  public currentUser: User;
  public errorMessage: string;
  public isSubmitted = false;
  public displayedUserId: string;
  public allUsersArray: User[];
  public displayedUser: User;
  private sub1: Subscription;
  private sub2: Subscription;
  private sub3: Subscription;
  private sub4: Subscription;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {


    this.sub1 = this.userService.currentUser.subscribe(
      currentUser => {
        this.currentUser = currentUser;
      });

    this.sub2 = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.displayedUserId = paramMap.get('id');

      this.sub3 = this.userService.getAllUsers().subscribe((allUsersArray) => {
        this.allUsersArray = allUsersArray;
        if (this.allUsersArray) {
          this.allUsersArray.forEach ((elmt) => {
            if (elmt._id === this.displayedUserId) {
              this.displayedUser = elmt;
              this.editProfileForm = this.fb.group({
                name: [ this.displayedUser.name, [Validators.required, Validators.minLength(3)]],
                firstname: [ this.displayedUser.firstname, [Validators.required, Validators.minLength(3)]],
                pseudo: [ this.displayedUser.pseudo, [Validators.required, Validators.minLength(3)]],
                email: [ this.displayedUser.email, [Validators.required, Validators.email]],
                birth: [ this.displayedUser.birth, [Validators.required]],
                sexe: [this.displayedUser.sexe, [Validators.required]],
                grade: [ this.displayedUser.grade, [Validators.required]]
              });
            }
          });
        }
      });
    });
  }

  public submit(): void {
    this.isSubmitted = true;
    if (this.editProfileForm.valid) {
      this.editProfileForm.value._id = this.displayedUser._id;

      this.sub4 = this.userService.editProfile(this.editProfileForm.value).subscribe(
        (user: User) => {
          this.router.navigate(['accueil', 'post', this.currentUser._id]);
        },
        err => {
          console.log('Erreur inscription', err);
          if (err.status === 401) {
            this.errorMessage = 'Vous n\'êtes pas autorisé à consulter ces informations';
          } else {
            this.errorMessage = 'Une erreur c\'est produite. impossible de modifier votre profil.';
          }
        }
      );
    }
  }

  ngOnDestroy() {
    if ( this.sub1 ) {
      this.sub1.unsubscribe();
    }
    if ( this.sub2 ) {
      this.sub2.unsubscribe();
    }
    if ( this.sub3 ) {
      this.sub3.unsubscribe();
    }
    if ( this.sub4 ) {
      this.sub4.unsubscribe();
    }
  }

}

// public comparisonValidator(): any {
//   return (group: FormGroup): any => {
//     const control1 = group.controls.password;
//     const control2 = group.controls.confirmPassword;
//     if (control1.value !== control2.value) {
//       control2.setErrors({isNoMatch: true});
//     } else {
//       control2.setErrors(null);
//     }
//     return;
//   };
// }

