import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  constructor() {}

  @Input() contacts: any;
  @Output('remove') onRemove = new EventEmitter<string>();

  ngOnInit(): void {}

  remove(id: string) {
    this.onRemove.emit(id);
  }
}
