import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit, OnChanges {

  @Input() config: any;
  // @Input()  size!: number | string;
  @Input() set NgModel(value: any) {
    this._ngModelValue = value;
    this._inputValue = value && value[this.config.displayPattern] || '' //(name && name.trim()) || '<no name set>';
  }
  get ngModel(): any { return this._ngModelValue; }

  public _inputValue = '';
  private _ngModelValue: any;

  // @Input() NgModel!: any;
  @Output() NgModelChange = new EventEmitter<any>();

  // inputData: any;
  isOpen: boolean = false;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // debugger;
    // if(changes.)
  }

  ngOnInit(): void {
  }
  toggle() {
    if (!this.isOpen) {
      this.isOpen = true;
    }
  }
  onSelect(event: any) {
    this.isOpen = false;


    this.NgModel = event;
    this.NgModelChange.emit(this.NgModel);
    this._inputValue = event && event[this.config.displayPattern] || ''
    this._ngModelValue = event;
  }

  getDisplay() {
    return this.NgModel && this.config.displayPattern ? this.NgModel[this.config.displayPattern] : '';
  }

  search(){
    
  }
}
