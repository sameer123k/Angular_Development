import { Component } from '@angular/core';
import { AuthService } from '../../guard/auth.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {

  constructor(private auth:AuthService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(){
    if(this.auth.isloggedIn()){
     this.router.navigate(['/admin']);
    }
  }

}
