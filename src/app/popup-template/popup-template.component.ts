import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralService } from '../shared/services/general.service';

@Component({
  selector: 'app-popup-template',
  templateUrl: './popup-template.component.html',
  styleUrls: ['./popup-template.component.scss']
})
export class PopupTemplateComponent {
  modalTitle: string;
  modalMessage: string;
  modalType:ModalType = ModalType.INFO;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public generalService: GeneralService,
    ) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
    this.modalType = data.type;
    }

}
export enum ModalType {
  INFO = 'info',
  WARN = 'warn'
}

