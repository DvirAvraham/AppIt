import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  subscription!: Subscription;
  contact!: Contact;

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id') + ''; // another option for getting route params
    this.subscription = this.route.data.subscribe(async ({ contact }) => {
      this.contact = contact?._id
        ? contact
        : (this.contactService.getEmptyContact() as Contact);
    });
    console.log(this.contact);
  }

  async onSaveContact() {
    this.router.navigateByUrl('contact');
    await this.contactService.saveContact({ ...this.contact });
  }

  back(): void {
    this.router.navigateByUrl('contact');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
