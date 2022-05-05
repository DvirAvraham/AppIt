import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import{EventDetailsComponent} from './pages/event-details/event-details.component';



const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent,

  },
  {
  path: '',
  component: HomePageComponent,
  children: [
    {
      path: 'event/:id',
      component: EventDetailsComponent,
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
