import { Component, Injectable, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SnackMessageComponent } from '../snack-message/snack-message.component';



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

  share(): void {
    this.snackMessage.openSnackBar('Link copiado para a área de transferência')
    navigator.clipboard.writeText(window.location.href)
  }


  constructor(
    private snackMessage: SnackMessageComponent
  ) {

  }



}
