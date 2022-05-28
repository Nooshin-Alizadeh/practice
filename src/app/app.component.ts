import { Component,OnInit,Injector } from '@angular/core';
import { GridColumnConfig, GridConfig, GridSortConfig } from './Framework/Component/grid/grid.component';
import {DataService,IResponse} from './Framework/Services/data.service'
// import {} from '../'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  lookupConfig:any;
  title = 'Practice';
  lookUptest:any;//={'id':567,'first_name':'Nooshin'};
  dataService!: DataService;
  constructor(protected injector: Injector){
    this.dataService = this.injector.get(DataService);
  }
ngOnInit(){
  this.configLookup()
}
configLookup(){
  this.lookupConfig={};
  this.lookupConfig.displayPattern='first_name';

  this.lookupConfig.grid = new GridConfig();
  this.lookupConfig.grid.url = this.dataService.getUrl('users');
  this.lookupConfig.grid.onRowClick = (row:any) => {
    //this.quickViewService.open(this.entityType, row.id);
  };
  this.lookupConfig.grid.setColumns(
    // new GridColumnConfig('id', 'id', { width: '200px' }),
    new GridColumnConfig('first_name', 'first_name', { width: '200px' }),
    // new GridColumnConfig('last_name', 'last_name', { width: '200px' }),
    // new GridColumnConfig('email', 'email', { width: '200px' }),

  );
}

}
