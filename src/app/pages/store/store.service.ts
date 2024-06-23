import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class StoreService {
    endPoint = 'https://fakestoreapi.com/products';

    constructor(private httpClient: HttpClient) {
    }

    getProducts(): Observable<any> {
        return this.httpClient.get(this.endPoint)
    }


}