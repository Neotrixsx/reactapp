import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SidebarModule } from 'ng-sidebar';
import { NavbarComponent } from './navbar/navbar.component';
import { IssuesComponent } from './issues/issues.component';
import { NewissuesComponent } from './newissues/newissues.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataService } from './_services/data.service';
import { RequesthttpService } from './_services/requesthttp.service';
import { MomentDateFormatter } from './_services/momentdateformatter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuesComponent,
    NewissuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000, // Time
      positionClass: 'toast-top-right', // Position
      preventDuplicates: true,
    }),
    SidebarModule.forRoot(),
    SelectDropDownModule,
    NgxDatatableModule
  ],
  providers: [DataService, RequesthttpService, MomentDateFormatter],
  bootstrap: [AppComponent]
})
export class AppModule { }
