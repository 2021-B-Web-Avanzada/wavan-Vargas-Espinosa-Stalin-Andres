import  {Injectable} from '@angular/core'

import { AuthService } from './auth-services';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanActivate , Router, RouterStateSnapshot, UrlTree} from '@angular/router'


@Injectable()

export class EstaLogueadoGuard implements CanActivate{

  //Inyeccion de dependencias
  constructor(private readonly _authService:AuthService,
              private readonly _router: Router){

  }

  canActivate( ActivatedRouteSnapshot: any, RouterStateSnapshot: any): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    if (!this._authService.estaLogeado){
      this._router.navigate(['/forbidden'])
    }
    return this._authService.estaLogeado;
  }
}
