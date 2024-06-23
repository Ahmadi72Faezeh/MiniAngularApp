import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PostIndexService} from "../../post/post-index/postndexService";
import Swal from "sweetalert2";
import {TaskService} from "../task-service";

@Component({
    selector: 'app-task-creat',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './task-creat.component.html',
    styleUrl: './task-creat.component.scss'
})
export class TaskCreatComponent {

    @Output() creatTask = new EventEmitter<any>();

    constructor(private fb: FormBuilder,
                private taskService:TaskService ) {
    }

    public taskForm: FormGroup = this.fb.group({
        title: [null, [Validators.required]],
        completed : [false],
    })

    submitForm(): void {
        console.log(this.taskForm.value)
        this.taskService.CreatTodo(this.taskForm.value).subscribe((res: any) => {
            console.log(res)
            this.creatTask.emit(res)
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
        this.taskForm.reset();
    }

}
