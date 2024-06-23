import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import Swal from "sweetalert2";
import {StoreService} from "../../store.service";

@Component({
    selector: 'app-store-cart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './store-cart.component.html',
    styleUrl: './store-cart.component.scss'
})
export class StoreCartComponent implements OnInit {
    @Input() product: any;
    @Output() productItem = new EventEmitter<any>();

    constructor() {
    }

    products: any[] = [];
    test: any[] = [];


    ngOnInit(): void {

    }

    buyProduct(value: any): void {
        this.productItem.emit(value)

    }

}
