import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { } from 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';

@Injectable()

export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<any> {
    return this._http.get(this._albumUrl);
  }

}
