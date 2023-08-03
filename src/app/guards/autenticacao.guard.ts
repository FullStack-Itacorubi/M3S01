import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const privadoGuard: CanActivateFn = (route, state) => {

  if (inject(AuthService).estaLogado())
    return true;
  else
    return inject(Router).createUrlTree(['/nao-autorizado']);
};

export const publicoGuard: CanActivateFn = (route, state) => {

  if (!inject(AuthService).estaLogado())
    return true;
  else
    return inject(Router).createUrlTree(['/labschool/alunos']);
};


