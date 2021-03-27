import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { LoginService } from './service/login.service';
import { AuthGuardService } from './service/authGaurd.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentListComponent,
    DocumentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [ LoginService, MatDatepickerModule, AuthGuardService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
