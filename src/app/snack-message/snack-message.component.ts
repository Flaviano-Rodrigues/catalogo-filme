import { Component, Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-snack-message',
  templateUrl: './snack-message.component.html',
})
export class SnackMessageComponent {

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 3000 });
  }

  constructor(private snackBar: MatSnackBar) { }
}
