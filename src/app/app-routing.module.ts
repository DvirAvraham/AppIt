import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { CotactDetailsComponent } from './pages/cotact-details/cotact-details.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: CotactDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    children: [
      {
        path: 'edit',
        component: EditPageComponent,
      },
      {
        path: 'edit/:id',
        component: EditPageComponent,
      },
    ],
  },
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'event/:id',
        component: EventDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
