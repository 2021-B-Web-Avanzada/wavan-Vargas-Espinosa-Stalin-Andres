import  {Injectable} from '@angular/core'
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-services';

@Injectable()

export class EsAdministradorGuard implements  CanActivate{

  //Inyeccion de dependencias
  constructor(private readonly _authService:AuthService,
              private readonly _router: Router){

  }

  canActivate( ActivatedRouteSnapshot: any, RouterStateSnapshot: any): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    const esAdministrador = this._authService.roles.some((permiso: string)=>permiso === 'admin')
    if (!esAdministrador){
      this._router.navigate(['/forbidden'])
    }
    return esAdministrador;
  }
}
