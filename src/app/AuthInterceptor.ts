import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler } from '@angular/common/http';
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${this.auth.getToken()}`
    //   }
    // });

    return next.handle(request)
      .map(resp => {
        // on Response
        if (resp instanceof HttpResponse) {
          resp = resp.clone<any>({ body: resp.body.Data });
          return resp;
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            alert('Session Expired');
          }
          else {
            return err.error;
          }
        }
      });
  }
}