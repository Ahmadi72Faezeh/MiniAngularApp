import {Component, DoCheck} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck {
    productItem: any[] = [];

    constructor() {
    }

    ngDoCheck(): void {
        this.loadCart();
    }

    loadCart(): void {
        const cartString = localStorage.getItem('cart');
        this.productItem = cartString ? JSON.parse(cartString) : [];
    }
}

