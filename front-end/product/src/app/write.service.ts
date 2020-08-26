import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FileName } from './file-name';
import { Search } from 'src/app/search';
import { Password } from './password';
@Injectable({
  providedIn: 'root'
})
export class WriteService {

  this: any;
  constructor(private _http: HttpClient) { }

  writes(fn:FileName){
    return this. _http.post<any>('http://localhost:3000/writes', fn);
  }

  read(fg:Search){
    return this._http.post<any>('http://localhost:3000/read', fg);
  }

  update(fn:FileName){
    return this. _http.post<any>('http://localhost:3000/update', fn);
  }

  edit(fn:Password){
return this._http.post<any>('http://localhost:3000/edit',fn);
  }

  delete(fn:Password){
    return this._http.post<any>('http://localhost:3000/delete',fn);
  }
}
