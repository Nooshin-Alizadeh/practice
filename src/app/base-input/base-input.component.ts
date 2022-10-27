import { Component, Input, OnInit, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})

export class BaseInputComponent implements OnInit {

  constructor(public render: Renderer2) {
    this.configuration = {};
  }

  @Input() configuration: baseInput;
  @Input() modelValue: string;
  _inputValue;
  @Output() clickTest = new EventEmitter();
  @Output() modelValueChange = new EventEmitter();
  ngOnInit(): void {
    var self = this;
    // setTimeout(() => {
    //   self.modelValueChange.emit();
    // }, 10000);
    setInterval(() => {
      // self.modelValueChange.emit(this.render);
    }, 100)
  }
  fnChange() {
    this.modelValueChange.emit();
  }



}
export interface baseInput {
  title?: string;
  icon?: string;
  style?: string;
  type?: string;
  showIcon?: boolean;

}
