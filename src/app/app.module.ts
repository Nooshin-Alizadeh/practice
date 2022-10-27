import { CommonModule } from '@angular/common';
// import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbDropdown, NgbNavItem, NgbDropdownItem, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LookupComponent } from './Framework/Component/lookup/lookup.component';
import {MatTableModule} from '@angular/material/table';
// import {matcard} from '@angular/material/matcard';
import { GridComponent } from './Framework/Component/grid/grid.component';
// import {CdkTableModule} from '@angular/cdk/table';
import { MatCardModule } from '@angular/material/card';
import { BaseInputComponent } from './base-input/base-input.component';
import { SampleDialogComponent } from './page/sample-dialog/sample-dialog.component';
// import { ModalComponent } from './Framework/Component/modal/modal/modal.component';
// import { IconDirective } from './BaseInput/icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    LookupComponent,
    GridComponent,
    BaseInputComponent,
    SampleDialogComponent,
    // ModalComponent,
    // IconDirective
    // UserListComponent,
    // GridComponent,
    // ToolbarConfigComponent,
    // UserDetailComponent,
    // OtherListComponent,
    // OtherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    CommonModule,
    NgbModule,
    CdkTableModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  exports: [
    CdkTableModule,
    // IconDirective
  ],
  providers: [NgbNavItem],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
