import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-home-index',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './home-index.component.html',
  styleUrl: './home-index.component.scss'
})
export class HomeIndexComponent {

}
