import {
  Component,
  OnInit,
  Inject,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
    private snackBar: MatSnackBar,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {}

  closeNotification() {
    this.elementRef.nativeElement.addEventListener('click', () => {
      this.snackBar.dismiss();
    });
  }
}
