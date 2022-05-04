import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service'

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  // contacts: Contact[] = []
  contacts: any;

  async ngOnInit(): Promise<void> {
await this.contactService.loadContacts()
this.contactService.contacts$.subscribe(contacts => this.contacts = contacts)

  }

}
