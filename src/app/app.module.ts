import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { NgxWheelModule } from 'ngx-wheel';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';

import { DialogComponent } from './shared/components/dialog/dialog.component';
import { PopupTemplateComponent } from './popup-template/popup-template.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ModalPopupComponent,
    DialogComponent,
    PopupTemplateComponent,
    DialogExampleComponent
  ],
  entryComponents:[DialogExampleComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MdbModalModule,
    NgxWheelModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    NzModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
