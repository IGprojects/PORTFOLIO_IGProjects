import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {
    public url: string;

    constructor(
        public _http: HttpClient,
    ) {
        this.url = Global.url; //localhost:3700/api/getProject
    }

    public addProject(project: Project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'save', params, { headers: headers });
    }

    public getProjects(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'listProjects', { headers: headers });
    }

    public getProject(id: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'listProject/' + id, { headers: headers });
    }

    public deleteProject(id: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'deleteProject/' + id, { headers: headers });
    }

    public editProject(project: any): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log(this.url + 'updateProject/' + project._id);
        return this._http.put(this.url + 'updateProject/' + project._id, params, { headers: headers });
    }
}