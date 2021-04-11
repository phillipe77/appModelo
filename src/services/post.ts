import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class Post{
    
    server: string = 'http://localhost:8888/apiionic/';

    constructor(private http: HttpClient){
    }

    dadosApi(dados: any, api: string){
        const httpOptions = {
            headers: new HttpHeaders({'Content-type' : 'application/json'})
        }
        let url = this.server + api;
        return this.http.post(url,JSON.stringify(dados),httpOptions).map(res => res);
    }

}