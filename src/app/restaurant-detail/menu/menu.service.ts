import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Menu} from './menu.model';

import {MEAT_API} from '../../app.api';
import {ErrorHandler} from '../../app.error-handler';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MenuService {
  constructor(private http: Http) {}
  menu(): Observable<Menu[]> {
    return this.http.get(`${MEAT_API}/menu`)
      .map( response => response.json())
      .catch(ErrorHandler.handleError);

}




}
