import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DeleteModalComponent} from "../../../../shared/delete-modal/delete-modal.component";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-post-card',
    standalone: true,
    imports: [DeleteModalComponent,RouterLink],
    templateUrl: './post-card.component.html',
    styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
    constructor() {
    }

    @Input() post: any;
    @Output() refreshValue = new EventEmitter<number>();


    refreshList(event: any): void {
        console.log(event)
        this.refreshValue.emit(event)

    }


}
