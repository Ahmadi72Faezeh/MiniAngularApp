import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PostIndexService} from "../post-index/postndexService";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-edit-post',
    standalone: true,
    imports: [ReactiveFormsModule,],
    templateUrl: './edit-post.component.html',
    styleUrl: './edit-post.component.scss'
})
export class EditPostComponent {
    @Output() creatPost = new EventEmitter<any>();
    @Output() editPost = new EventEmitter<any>();

    private id: any;

    constructor(private fb: FormBuilder,
                private postIndexService: PostIndexService,
                private router: ActivatedRoute, private rout: Router) {
        this.id = this.router.snapshot.params['id']

    }

    public postForm: FormGroup = this.fb.group({
        title: [null, [Validators.required]],
        body: [null, [Validators.required]]
    })

    editForm(): void {
        this.postIndexService.EditPost(this.postForm.value, this.id).subscribe((res: any) => {
            Swal.fire({
                title: 'Edit successfully',
                text: '',
                icon: 'success',
                position: 'top',
                toast: true,
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            })
            this.postIndexService.changeData(res);
            this.rout.navigate(['posts']).then(r => res)
        })
        this.postForm.reset();
    }

}
