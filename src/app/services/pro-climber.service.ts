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
        return this.http.get<ProClimber[]>(`${environment.apiUrl}/${this.url}`);
    }

    public updateProClimber(climber: ProClimber) : Observable<ProClimber[]> {
        return this.http.put<ProClimber[]>(`${environment.apiUrl}/${this.url}`, climber);
    }

    public createProClimber(climber: ProClimber) : Observable<ProClimber[]> {
        return this.http.post<ProClimber[]>(`${environment.apiUrl}/${this.url}`, climber);
    }

    public deleteProClimber(climber: ProClimber) : Observable<ProClimber[]> {
        return this.http.delete<ProClimber[]>(`${environment.apiUrl}/${this.url}/${climber.id}`)
    }

    
}