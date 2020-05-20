import { Component } from '@angular/core';
import { Iuser }from './user'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  user:Iuser = {
  id:null,
  name: null,
  emaiId:null,
  mobile:null,
  education:null,
      job: [
          {
          companyname: null,
          designation: null
          }
      ]
    
}

 ngOnInit(): void {
   
  }

saveUser(){
  // Call your service here
    // this.cService.saveUser(this.user).subscribe(
    //   (data:Iuser) => {
    //     console.log(data);
    //     data = this.user;
    //   }
    // )
  }

  
  addMore(){
    let x = {
      companyname:'',
      designation:''
    }
    this.user.job.push(x)
  }

  removeItem(index){
    this.user.job.splice(index, 1)
  }
}
