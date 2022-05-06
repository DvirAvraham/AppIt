import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  constructor() {}

  @Input() contact!: Contact;
  @Output('remove') onRemove = new EventEmitter<string>();

  ngOnInit(): void {}

  onRemoveContact(id: string) {
    this.onRemove.emit(id);
  }
}
