import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faTimes} from "@fortawesome/free-solid-svg-icons";

import {Task} from "../../Task";

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

    @Input() task = {} as Task;
    @Output() deleteTask: EventEmitter<Task> = new EventEmitter<Task>()
    @Output() toggleReminder: EventEmitter<Task> = new EventEmitter<Task>()

    faTimes = faTimes;

    constructor() {
    }

    ngOnInit(): void {
    }

    onDeleteTask(task: Task) {
        this.deleteTask.emit(task);
    }

    onToggleReminder(task: Task) {
        this.toggleReminder.emit(task);
    }
}
