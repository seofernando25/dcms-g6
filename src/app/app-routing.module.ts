import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'contact', component: ContactComponent },
  // { path: 'some-guarded-page', component: ContactComponent, canActivate: [AuthGuard]},
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'login', component: PageNotFoundComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}