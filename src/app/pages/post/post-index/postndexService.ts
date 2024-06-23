import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PostIndexService {
    endPoint = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private httpClient: HttpClient) {
    }

    getPost(): Observable<any> {
        return this.httpClient.get(this.endPoint)
    }

    DeletePost(id: number): Observable<any> {
        return this.httpClient.delete(`${this.endPoint}/${id}`)
    }

    CreatPost(value: FormData): Observable<any> {
        return this.httpClient.post(this.endPoint, value)
    }

    EditPost(value: FormData , id:number): Observable<any> {
        return this.httpClient.put(`${this.endPoint}/${id}`, value)
    }

    changeData(data: string) {
        // this.dataSource.next(data);
    }


}