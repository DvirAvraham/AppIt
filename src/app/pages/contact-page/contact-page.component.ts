import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  contacts!: Contact[];

  async ngOnInit(): Promise<void> {
    await this.loadContacts();
    this.contactService.contacts$.subscribe(
      (contacts) => (this.contacts = contacts)
    );
  }

  async loadContacts(filter: string = ''): Promise<void> {
    await this.contactService.loadContacts(filter);
  }
}
