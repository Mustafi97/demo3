import { Component, Input, OnInit } from '@angular/core';

import { ApiService} from 'src/app/services/api.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
@Input() createDetails= {date:'', title:'', detail:''}
  Service: any = [];
  
 
  constructor(private authService: ApiService) {
    
   }

  ngOnInit() {
    this.loadTodo()
  }
  loadTodo(){
  return  this.authService.getTodo().subscribe((data: {})=>{
this.Service=data;
  }
     
    );
  }
 
submitF(){
  this.authService.createDetail(this.createDetails).subscribe((data:{})=>{
    console.log('Issue added')
  }
  )
}
  
  }


