import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TaskService {
    endPoint = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private httpClient: HttpClient) {
    }

    getTodo(): Observable<any> {
        return this.httpClient.get(this.endPoint)
    }

    DeleteTodo(id: number): Observable<any> {
        return this.httpClient.delete(`${this.endPoint}/${id}`)
    }

    CreatTodo(value: FormData): Observable<any> {
        return this.httpClient.post(this.endPoint, value)
    }

    completedToDO(value: any): Observable<any> {
        return this.httpClient.put(`${this.endPoint}/${value.id}`, value)
    }

    filterTask(page: number): Observable<any> {
        const params = new HttpParams()
            .set('_limit', page)

        return this.httpClient.get(this.endPoint, {params})

    }

}