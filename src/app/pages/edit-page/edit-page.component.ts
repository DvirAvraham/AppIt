import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  contact!: Contact;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') + '';
    this.contact = this.contactService.getContactById(id) as Contact;
    console.log(this.contact);
  }
  async onSaveContact() {
    this.router.navigateByUrl('contact');
    await this.contactService.saveContact({ ...this.contact });
  }

  back(): void {
    this.router.navigateByUrl('contact');
  }
}
