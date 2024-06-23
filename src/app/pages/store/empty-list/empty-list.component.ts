import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-empty-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './empty-list.component.html',
  styleUrl: './empty-list.component.scss'
})
export class EmptyListComponent {

}
