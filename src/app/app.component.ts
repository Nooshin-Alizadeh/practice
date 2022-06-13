import { Component,OnInit,Injector } from '@angular/core';
import { baseInput, BaseInputComponent } from './base-input/base-input.component';
import { GridColumnConfig, GridConfig, GridSortConfig } from './Framework/Component/grid/grid.component';
import {DataService,IResponse} from './Framework/Services/data.service'
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
  constructor(protected injector: Injector){
    this.dataService = this.injector.get(DataService);
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


}
