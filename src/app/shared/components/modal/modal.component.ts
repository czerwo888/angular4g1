import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title!: string;
  @Input() message!: string;
  @Output() close = new EventEmitter<void>();

  ngOnInit(){
    const modalElement = document.querySelector('.modal');
    if(modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  closeModal(){
    this.close.emit();
  }

}
