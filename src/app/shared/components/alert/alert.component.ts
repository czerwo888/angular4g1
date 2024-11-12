import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-alert',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() ErrorMessage!:string;
  @Output() close = new EventEmitter<void>();

  clickClose() {
    this.close.emit();
  }
}
