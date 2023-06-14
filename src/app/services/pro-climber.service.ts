import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProClimber } from '../models/pro-climber';
import { environment } from 'src/enviorments/environments';

@Injectable({
    providedIn: 'root'
})
export class ProClimberService {
    private url = "ProClimber"

    constructor(private http: HttpClient) {}
        
    public getProClimbers() : Observable<ProClimber[]> {
        return this.http.get<ProClimber[]>(`${environment.apiUrl}/${this.url}`)
    }
    
}