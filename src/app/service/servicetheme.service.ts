import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicethemeService {

  url = environment.baseUrl

  constructor(private http:HttpClient) { }


  getAllTheme(){
    return this.http.get(this.url+"/theme/getAllThemes")
  }


  getTheme (id:any): Observable <Object> {
    return this.http.get(this.url+"/theme/getById/"+id)

  }
}
