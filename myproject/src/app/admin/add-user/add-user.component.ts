import { Component } from '@angular/core';
import { FormControl, FormGroup ,  ReactiveFormsModule , Validators} from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  constructor(private _service: UserDataService, private route:ActivatedRoute, private router: Router){

  }
  // /form
  addUser= new FormGroup({
     name: new FormControl('',[Validators.required]),
     email:new FormControl('',[Validators.required, Validators.email]),
     phone: new FormControl('',[Validators.required, Validators.minLength(10)]),
     gender: new FormControl('',[Validators.required]),
     state: new FormControl('',[Validators.required]),
     pincode: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })

//  getters for validtion
  get Name(){
    return this.addUser.get('name')
  }
  get email(){
    return this.addUser.get('email')
  }
  get phone(){
    return this.addUser.get('phone')
  }
 get  gender(){
    return this.addUser.get('gender')
  }
  get state(){
    return this.addUser.get('state')
  }
  get pincode(){
    return this.addUser.get('pincode')
  }


  submitData(){
    // this._service.AdduserData.push(this.addUser.value)
    this.router.navigate(['admin/userslist'])
  }
}
