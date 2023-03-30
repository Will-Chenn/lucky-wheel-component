import { GeneralService } from './shared/services/general.service';
import { Component, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'
import { MatDialog } from '@angular/material/dialog';
import { PopupTemplateComponent } from './popup-template/popup-template.component';
import { NzModalService } from 'ng-zorro-antd/modal';
// import { ModalComponent } from './modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(NgxWheelComponent, { static: false }) wheel: NgxWheelComponent| undefined;
  // The | symbol in wheel is called the union type operator in TypeScript.

  // modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(public dialog: MatDialog, 
              private modalService: NzModalService,
              private newModalService: MdbModalService,
              public generalService: GeneralService) {};
  title = 'spinGame';
  seed = [...Array(12).keys()];
  idToLandOn: any;
  items: any[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;
  isSpinning = false;
  buttonText = 'Play Game';

  ngOnInit(){
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ['#82EEFD', '#016064']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
      text: `Prize ${value}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))
  }


  before(){
    this.isSpinning = true;
    console.log("before isSpinning", this.isSpinning);
  }

  async spin(prize: any) {
    console.log("go")
    await new Promise(resolve => setTimeout(resolve, 0));
    
  }

  async playOrReset() {
    if (!this.isSpinning) {
      console.log("palyorrest p1")
      this.isSpinning = true;
      this.wheel?.reset();
      this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
      await new Promise(resolve => setTimeout(resolve, 0));
      this.wheel?.spin();
    } 
  }

  after(){
    this.isSpinning = false;
    console.log("after isSpinning", this.isSpinning);
    this.buttonText = 'Play Again';

    // const modal = this.modalService.create({
    //   nzTitle: 'Congratulations!',
    //   nzContent: `You won Prize ${this.idToLandOn}`,
    //   nzOkText: 'OK',
    //   nzMaskClosable: false,
    //   nzOnOk: () => console.log('Modal closed')
    // })

    // console.log("modal", modal);

    // modal.afterClose.subscribe(result => {
    //   console.log('Modal result:', result);
    // });
    // console.log(modal)

    // const dialogRef = this.dialog.open(DialogComponent, {
    //   // data: { message: `You got Prize ${this.idToLandOn}` }
    // });
  
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogRef = this.dialog.open(PopupTemplateComponent, {
      data: { message: `You got Prize ${this.idToLandOn}` }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // openModal(){
  //   this.modalRef = this.newModalService.open(ModalComponent)
  // }

  openPopup(){
    this.dialog.open(ModalPopupComponent);
  }

  openMaterialDialog(){
    this.dialog.open(DialogExampleComponent);
  }
}

