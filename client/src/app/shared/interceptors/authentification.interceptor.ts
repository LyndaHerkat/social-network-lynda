import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


export class AuthentificationInterceptor implements HttpInterceptor {
  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('jwt');
    if (token) {
      const authentificationReq = req.clone({
        headers: req.headers.set('jwttoken', token)
      });
      return next.handle(authentificationReq);
    } else {
      return next.handle(req);
    }
  }
}
