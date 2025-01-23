import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../guard/auth.service';

// recieve data from login component 
import { Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() loggedInUser: string | null = null;

  startDate: any;

  Data: any
  emailData: any = []
  // imageUrl: any = []
  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) {
    this.Data = localStorage.getItem('SignupData')
    this.Data = JSON.parse(this.Data);
    this.emailData.push(this.Data[0].name);    
    console.log('Email Data', this.emailData)

    // this.Data = JSON.parse(this.Data)
    // this.emailData.push(this.Data[0].name);
    // this.imageUrl.push(this.Data[0].file);
    // console.log(this.imageUrl)
  }

}
