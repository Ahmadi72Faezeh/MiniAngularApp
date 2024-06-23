import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PostIndexService} from "../../pages/post/post-index/postndexService";

@Component({
    selector: 'app-delete-modal',
    standalone: true,
    imports: [],
    templateUrl: './delete-modal.component.html',
    styleUrl: './delete-modal.component.scss'
})
export class DeleteModalComponent {
    @Input() id: any;
    @Output() deleteItem = new EventEmitter<number>();
    constructor(private postIndexService: PostIndexService) {
    }

    deletePost(): void {
        this.postIndexService.DeletePost(this.id).subscribe((res: any) => {
            this.deleteItem.emit(this.id);

        })
    }



}
