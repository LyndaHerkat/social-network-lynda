import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';

import { UserService } from '../service/user.service';
import { JwtToken } from '../models/jwt-token.model';
import { FocusMonitor } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.userService.jwtToken.pipe(
        map( (jwtToken: JwtToken) => {
          if (jwtToken.isLogged){
            return true;
          } else {
            this.router.navigate(['']);
            return false;
          }
        })
      );
  }

}
