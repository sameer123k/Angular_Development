import { CanActivate, Router, ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Observable<boolean | UrlTree> | boolean | UrlTree {

    if (this.auth.isloggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }
}
