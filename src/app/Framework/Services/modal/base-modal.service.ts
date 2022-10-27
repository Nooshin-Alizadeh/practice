import { Injectable, Injector, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class BaseModalService {
@Input()modalContent;
viewModel :any ={};
public activeModal: NgbActiveModal;
  constructor(private injector : Injector) { 
    this.activeModal=injector.get(NgbActiveModal);
  }
  onClose(){

  }
}
