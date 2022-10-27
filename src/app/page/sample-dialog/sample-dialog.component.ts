import { Component, Injector, OnInit } from '@angular/core';
import { BaseModalService } from 'src/app/Framework/Services/modal/base-modal.service';

@Component({
  selector: 'app-sample-dialog',
  templateUrl: './sample-dialog.component.html',
  styleUrls: ['./sample-dialog.component.scss']
})
export class SampleDialogComponent extends BaseModalService implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.viewModel=this.modalContent;
  }

}
