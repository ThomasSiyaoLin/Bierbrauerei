import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import {catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  readonly COUPON_SERVICE_URL = ""
  constructor(private http: HttpClient) { }
}
