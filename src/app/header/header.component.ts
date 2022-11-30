import { Component, Injectable, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() drawer!: MatDrawer;
  title: string = 'Filmes'


  constructor(
  ) {
  }

}
