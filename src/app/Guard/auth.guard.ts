import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userToken=localStorage.getItem('uesrToken');

  if(userToken!==null){
   return true;
  }else{
   const router=new Router();
   router.navigate(['/login']);
   return false;
  }
};
