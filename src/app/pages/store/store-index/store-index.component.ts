import {Component, OnInit} from '@angular/core';
import {StoreService} from "../store.service";
import {StoreCartComponent} from "./store-cart/store-cart.component";
import {NgFor} from "@angular/common";
import Swal from "sweetalert2";

@Component({
    selector: 'app-store-index',
    standalone: true,
    imports: [StoreCartComponent, NgFor],
    templateUrl: './store-index.component.html',
    styleUrl: './store-index.component.scss'
})
export class StoreIndexComponent implements OnInit {
    constructor(private storeService: StoreService) {
    }

    public products: any;
    public cart: any[] = [];
    public productsItem: any[] = [];


    ngOnInit() {
        this.getProducts();
        const cartString = localStorage.getItem('cart');
        this.productsItem = cartString ? JSON.parse(cartString) : [];
    }

    getProducts(): void {
        this.storeService.getProducts().subscribe((res: any) => {
            this.products = res;
        })
    }

    byeProduct(value: any): void {
        const item = this.productsItem.find((p: any) => p.id === value.id);
        Swal.fire({
            title: 'Add to basket',
            text: '',
            icon: 'success',
            confirmButtonText: '',
            showConfirmButton: false,
            timerProgressBar: true,
            toast: true,
            timer: 2000,
            position: 'top',
        });

        if (!item) {
            this.productsItem.push({
                ...value,
                quantity: 1
            });
        } else {
            item.quantity++;
        }

        localStorage.setItem('cart', JSON.stringify(this.productsItem));

    }


}
