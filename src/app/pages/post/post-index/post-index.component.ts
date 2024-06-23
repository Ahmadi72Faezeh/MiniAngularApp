import {Component, OnInit,} from '@angular/core';
import {PostIndexService} from "./postndexService";
import {PostCardComponent} from "./post-card/post-card.component";
import {NgFor, NgIf} from '@angular/common';
import Swal from 'sweetalert2'
import {CreatPostComponent} from "../creat-post/creat-post.component";

@Component({
    selector: 'app-post-index',
    standalone: true,
    imports: [PostCardComponent, NgFor, NgIf, CreatPostComponent],
    templateUrl: './post-index.component.html',
    styleUrl: './post-index.component.scss'
})
export class PostIndexComponent implements OnInit {

    constructor(private postIndexService: PostIndexService) {
    }

    public postValue: any;
    public data!: any;

    ngOnInit() {
        this.getPost();
        // this.editPost();
    }

    getPost(): void {
        this.postIndexService.getPost().subscribe((res: any) => {
            this.postValue = res;
        })
    }

    removePost(id: number): void {
        this.postValue = this.postValue.filter((item: any) => item.id !== id);
        Swal.fire({
            title: 'Delete successfully',
            text: '',
            icon: 'warning',
            position: 'top',
            toast: true,
            timer: 2000,
            showConfirmButton: false,
            timerProgressBar: true,
        })
    }

    addToPost(value: any): void {
        this.postValue.unshift(value)
    }

    editPost(): void {
        // this.postIndexService.currentData.subscribe(data => this.data = data);
        let newValue = this.postValue.find((item: any) => item.id === this.data.id);
        console.log(newValue)
    }


}
