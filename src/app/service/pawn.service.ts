import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreInfo } from '../interface/store';

@Injectable({
  providedIn: 'root'
})
export class PawnService {

  constructor(
    private http: HttpClient,
  ) { }

  pawnGetJson(phone: string): Observable<StoreInfo> {
    return this.http.get<StoreInfo>('assets/pawn/json/' + phone + '.json');
  }
}
