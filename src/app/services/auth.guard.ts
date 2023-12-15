import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const hashToken = !!localStorage.getItem('token');

  if (state.url === '/login' && !hashToken) {
    return true;
  }
  if (state.url === '/commun' && hashToken) {
    return true;
  }

  return true;
};
