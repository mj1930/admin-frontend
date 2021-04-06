import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    baseUrl = '';

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if(request.url.includes('products') && !request.url.includes('approve-disapprove-product')) {
            this.baseUrl = environment.sellerApiUrl;
        } else {
            this.baseUrl = environment.apiUrl;
        }
        let requestObject = {
            url: `${this.baseUrl}${request.url}`,
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.ODVhMTIxNTc0Njc4NWEzMzVjMTZmMTdhMzc2MzMxMjQ6N2ViMmRkNTVkZmViNjExMTc1ZWMwZDEzYmVhMWViNmU3MThhZGM5YzMyMzRmMjM4YWQ3NzY0NTE1YjcxZmY5Y2MzM2FjZTRhN2I1MGE2ZDBkM2UyYjA0MmUyZjlkOWNiMWZiMzNlY2ZiNTNjY2M5OGE2OTIyZjdlOTlkOTNmNGMwZDFkZWEzMzY4ODIxNDJiMDQ3MTlkYzAxNDYwN2VkMWRjNGQ4YjNjNTg5ZDM5YjY5YWNhMjE1YWNmMTYyNDNjNGM2M2M3ZTYwOGQ4ZTlhYTA4M2Q1OTM4OWI5MTI2Yzc.YXooZ1jg_tgb3Fi23o0JQd4F8SHH0XmewHuV4OfxZRA`,

                // Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        };

        if (request.url === 'users/admin/export') {
            requestObject['responseType'] = 'blob';
        }

        const authReq = request.clone(requestObject);
        return next.handle(authReq).pipe(
            catchError(this.handleError)
        );
    }

    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
}