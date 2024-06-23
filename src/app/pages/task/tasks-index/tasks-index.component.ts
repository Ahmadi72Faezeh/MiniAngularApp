import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task-service";
import {TaskCartComponent} from "./task-cart/task-cart.component";
import {NgFor} from "@angular/common";
import {TaskCreatComponent} from "../task-creat/task-creat.component";
import {TaskFilterComponent} from "../task-filter/task-filter.component";


@Component({
    selector: 'app-tasks-index',
    standalone: true,
    imports: [TaskCartComponent, NgFor, TaskCreatComponent, TaskFilterComponent],
    templateUrl: './tasks-index.component.html',
    styleUrl: './tasks-index.component.scss'
})
export class TasksIndexComponent implements OnInit {
    constructor(private taskService: TaskService) {
    }

    public TaskList: any;

    ngOnInit() {
        this.getTask();
    }

    getTask(): void {
        this.taskService.getTodo().subscribe((res: any) => {
            this.TaskList = res;
        })
    }

    addToTask(value: any): void {
        this.TaskList.unshift(value)
    }

    deleteTask(id: number): void {
        this.TaskList = this.TaskList.filter((item: any) => item.id !== id)
    }

    changeCompleted(value: any): void {
        const index = this.TaskList.findIndex((task: any) => task.id === value.id);
        if (index !== -1) {
            this.TaskList.splice(index, 1, value);
        }
    }

    filterTask(value: any): void {
        this.TaskList = value
    }

}
