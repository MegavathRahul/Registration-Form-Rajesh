import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users:any[]=[];
  addUserData(ref:NgForm)
  {
  let userObj = ref.value;
    
    this.users.push(userObj)

    console.log(userObj);

    ref.reset(); // clear form fields
}
}
