import {Component, OnInit} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import Swal from "sweetalert2";
import {EmptyListComponent} from "../empty-list/empty-list.component";

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [NgFor,NgIf,EmptyListComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

    public productItem: any;
    public total: any

    ngOnInit() {
        this.getList();
        this.totalAmount();
    }

    getList(): void {
        const cartString = localStorage.getItem('cart');
        this.productItem = cartString ? JSON.parse(cartString) : [];


    }

    increase(id: any): void {
        const item = this.productItem.find((p: any) => p.id === id);
        item.quantity++;
        this.updateList();
        this.totalAmount();
    }

    decrease(id: any): void {
        const item = this.productItem.find((p: any) => p.id === id);
        if (item.quantity > 1)
            item.quantity--;
        this.updateList();
        this.totalAmount();
    }


    deleteItem(id: any): void {
        this.productItem = this.productItem.filter((p: any) => p.id !== id);
        Swal.fire({
            title: 'Delete product',
            text: '',
            icon: 'warning',
            confirmButtonText: '',
            showConfirmButton: false,
            timerProgressBar: true,
            toast: true,
            timer: 2000,
            position: 'top',
        });
        this.updateList();
        this.totalAmount();
    }

    removeItems(): void {
        this.productItem = []
        Swal.fire({
            title: 'Clear list',
            text: '',
            icon: 'warning',
            confirmButtonText: 'false',
            showConfirmButton: false,
            timerProgressBar: true,
            toast: true,
            timer: 2000,
            position: 'top',
        });
        this.updateList();
        this.totalAmount();
    }

    totalAmount(): void {
        this.total = this.productItem.reduce((total: any, p: any) => {
            return total + p.price * p.quantity;
        }, 0);
        localStorage.setItem('total', JSON.stringify(this.total.toFixed(3)));
    }

    updateList(): void {
        localStorage.setItem('cart', JSON.stringify(this.productItem));
    }


}
