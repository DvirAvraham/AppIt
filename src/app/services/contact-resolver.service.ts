import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContactResolverService implements Resolve<Promise<Contact>> {
  constructor(private contactService: ContactService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    const { id } = route.params;
    const contact = await this.contactService.getContactById(id).toPromise();
    return contact;
  }
}
