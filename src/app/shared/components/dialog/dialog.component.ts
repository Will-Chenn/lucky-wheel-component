import { GeneralService } from '../../services/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

  constructor(public generalService: GeneralService){}

  ngOnInit(): void {
      
  }

}
