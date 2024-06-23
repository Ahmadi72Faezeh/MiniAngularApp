import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PostIndexService} from "../post-index/postndexService";
import Swal from "sweetalert2";

@Component({
    selector: 'app-creat-post',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './creat-post.component.html',
    styleUrl: './creat-post.component.scss'
})
export class CreatPostComponent {
    @Output() creatPost = new EventEmitter<any>();

    constructor(private fb: FormBuilder,
                private postIndexService: PostIndexService) {
    }

    public postForm: FormGroup = this.fb.group({
        title: [null, [Validators.required]],
        body: [null, [Validators.required]]
    })

    submitForm(): void {
        this.postIndexService.CreatPost(this.postForm.value).subscribe((res: any) => {
            this.creatPost.emit(res)
            Swal.fire({
                title: 'Creat successfully',
                text: '',
                icon: 'success',
                position: 'top',
                toast: true,
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            })
        })
        this.postForm.reset();
    }

}
