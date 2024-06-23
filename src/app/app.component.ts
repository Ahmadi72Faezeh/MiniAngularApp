import {CommonModule} from "@angular/common";
import {Component} from "@angular/core";
import {HeaderComponent} from "./pages/header/header.component";
import {RouterOutlet} from "@angular/router";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-app';
}