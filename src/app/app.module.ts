import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// Forms module

// Local imports

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginDialogComponent } from './dialog/login-dialog/login-dialog.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TimesPipe } from 'src/app/pipes/times.pipe';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { MyReviewComponent } from './pages/my-review/my-review.component';
import { UpdateMyReviewComponent } from './pages/update-my-review/update-my-review.component';
import { FAQComponent } from './pages/faq/faq.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';

const modules = [
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  ScrollingModule,
  MaterialModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    LoginDialogComponent,
    TestimonialsComponent,
    ContactComponent,
    TimesPipe,
    OurServicesComponent,
    MyReviewComponent,
    UpdateMyReviewComponent,
    FAQComponent,
    MyAccountComponent,
  ],
})
export class ExternalModules {}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ExternalModules,
  ],

  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
