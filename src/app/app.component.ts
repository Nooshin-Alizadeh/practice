import { Component,OnInit,Injector } from '@angular/core';
import { baseInput, BaseInputComponent } from './base-input/base-input.component';
import { GridColumnConfig, GridConfig, GridSortConfig } from './Framework/Component/grid/grid.component';
import { ModalService } from './Framework/Services/modal/modal.service';
import {DataService,IResponse} from './Framework/Services/data.service';
import { SampleDialogComponent } from './page/sample-dialog/sample-dialog.component';
// import {} from '../'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  lableValue;
  lookupConfig:any;
  title = 'Practice';
  lookUptest:any;//={'id':567,'first_name':'Nooshin'};
  dataService!: DataService;
  modalService: ModalService;
  modalValue;
  constructor(protected injector: Injector){
    this.dataService = this.injector.get(DataService);
    this.modalService = this.injector.get(ModalService);
  }
  inputConfig:baseInput;
ngOnInit(){
  this.configLookup()
  this.inputConfig={
    icon:'',
    showIcon:true,
    type:'number',
    title:'sample'
  }
}
alert(value:string){
  alert(value)
}
test;
configLookup(){
  this.test="Hello";
  this.lookupConfig={};
  this.lookupConfig.displayPattern='summary';

  this.lookupConfig.grid = new GridConfig();
  this.lookupConfig.grid.url = this.dataService.getUrl('WeatherForecast/get');
  this.lookupConfig.grid.onRowClick = (row:any) => {
    //this.quickViewService.open(this.entityType, row.id);
  };
  this.lookupConfig.grid.setColumns(
    // new GridColumnConfig('id', 'id', { width: '200px' }),
    new GridColumnConfig('Summary', 'summary', { width: '200px' }),
    new GridColumnConfig('TemperatureC', 'temperatureC', { width: '200px' }),
    // new GridColumnConfig('email', 'e0mail', { width: '200px' }),

  );

}
openDialog(inputData){
  this.modalService.open(SampleDialogComponent,null,{data:inputData});
}


}
