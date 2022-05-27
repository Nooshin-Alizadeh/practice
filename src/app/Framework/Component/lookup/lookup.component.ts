import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  @Input() config: any;
  // @Input()  size!: number | string;
  // get ngModel(): any { return this._ngModelValue; }
  // set ngModel(value:any) {
  //   this._ngModelValue=value;
  //   this._inputValue =value && value[this.config.displayPattern] || '' //(name && name.trim()) || '<no name set>';
  // }
   public _inputValue = '';
  public _ngModelValue: any;

  @Input() ngModelView!: any;
  @Output() ngModelViewChange = new EventEmitter<any>();

  // inputData: any;
  isOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    if (!this.isOpen) {
      this.isOpen = true;
    }
  }
  onSelect(event: any) {
    this.isOpen = false;
    debugger;
    debugger;
    this.ngModelView = event;
    this.ngModelViewChange.emit(this.ngModelView);
    this._inputValue =event && event[this.config.displayPattern] || ''
    this._ngModelValue=event;
  }

  getDisplay() {
    return this.ngModelView && this.config.displayPattern ? this.ngModelView[this.config.displayPattern] : '';
  }
  dotest(){}
}
