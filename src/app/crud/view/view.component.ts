import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { User } from '../user';

//this selector will be used in the app.
@Component({
  selector: 'view', 
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  users: User[] = [];

  constructor(public crudService: CrudService) { }

  loadData(){
      //get data from the service  
    this.crudService.getAll().subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
    }) 
  }

  ngOnInit(): void {
   this.loadData();
  }

  reloadUsers(){
    this.loadData();
  }

  //when data is large it may be useful to track the users by their id
  trackCourse(index, user){
    return user? user.id: undefined;
  }

}
