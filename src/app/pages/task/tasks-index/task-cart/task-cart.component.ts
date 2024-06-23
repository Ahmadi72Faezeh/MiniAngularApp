import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {TaskService} from "../../task-service";

@Component({
    selector: 'app-task-cart',
    standalone: true,
    imports: [NgIf],
    templateUrl: './task-cart.component.html',
    styleUrl: './task-cart.component.scss'
})
export class TaskCartComponent {

    @Input() task: any;
    @Output() delete_id = new EventEmitter<any>();
    @Output() changeCompleted = new EventEmitter<any>();
    public loading = false;

    constructor(private taskService: TaskService) {
    }

    deleteTask(id: number): void {
        this.taskService.DeleteTodo(id).subscribe((res: any) => {
            this.delete_id.emit(id)
        })
    }

    completedTask(task: any): void {
       this.loading = true;
        let data = {
            id: task.id,
            completed: !task.completed,
            title: task.title,
        }
        this.taskService.completedToDO(data).subscribe((res: any) => {
          this.loading = false;
            this.changeCompleted.emit(res)
        })
    }

}
