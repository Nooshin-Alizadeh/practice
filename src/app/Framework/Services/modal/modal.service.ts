import { Injectable, Injector } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
// import { isFunction } from 'util';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalService: NgbModal;
  constructor(injector : Injector) { 
    this.modalService=injector.get(NgbModal)
  }


  public open(content: any, options?: NgbModalOptions ,modalContent?:object  , resultFunction?:Function , reasonFunction?:Function){
    const modalRef =this.modalService.open(content, options);
    modalRef.componentInstance["modalContent"]=modalContent;
    modalRef.result.then(
			(result) => {
        
        resultFunction && _.isFunction(resultFunction) && resultFunction()
			//	this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
        reasonFunction && _.isFunction(reasonFunction) && reasonFunction()
				// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }

}
