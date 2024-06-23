import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskService} from "../task-service";

@Component({
    selector: 'app-task-filter',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './task-filter.component.html',
    styleUrl: './task-filter.component.scss'
})
export class TaskFilterComponent {
    constructor(private taskService: TaskService) {
    }


    @Output() limitValue = new EventEmitter<any>()


    public limit = 'Filter';


    selectLimit(count: any): void {
        this.taskService.filterTask(count).subscribe((res:any)=> {
            this.limitValue.emit(res)
        })


    }

}
