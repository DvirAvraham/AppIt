import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'cotact-details',
  templateUrl: './cotact-details.component.html',
  styleUrls: ['./cotact-details.component.scss'],
})
export class CotactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  subscription!: Subscription;
  contact!: Contact;

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(async ({ contact }) => {
      this.contact = contact;
    });
    console.log(this.contact);
  }
}
