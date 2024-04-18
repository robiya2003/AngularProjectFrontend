import { Component, OnInit } from '@angular/core';
import { GetAll } from '../../models/get-all';
import { CrudService } from '../../services/crud.service.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrl: './getall.component.css'
})
export class GetallComponent  {
 


  

    constructor(private crudservise:CrudService) {}
   
    displayedColumns: string[] = ['name', 'phoneNumber', 'email', 'password'];
    dataSource=this.crudservise.getAll();
    
}

