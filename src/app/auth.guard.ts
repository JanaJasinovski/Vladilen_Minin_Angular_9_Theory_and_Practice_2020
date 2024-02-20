import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { AuthService } from './auth.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then(isAuth => {
      if (isAuth) {
        return true;
      } else {
        this.router.navigate(['/posts'], {
          queryParams: {
            auth: false
          }
        });
        return false;
      }
    }).catch(error => {
      console.error("Error checking authentication:", error);
      return false; // or handle the error as needed
    });
  }


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state)
  }
}
