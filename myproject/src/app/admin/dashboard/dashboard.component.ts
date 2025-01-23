import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 hello="Welcome to Dashboard"

homeSet:any = 'Home'

localData:any

constructor(private pageTitle: Title){
this.localData = localStorage.getItem('SignupData');
this.localData = JSON.parse(this.localData);
console.log('Your Data',this.localData);
// page title 
this.pageTitle.setTitle('HRMS | Dashboard')
}

  toggleActive(value:any) {
    this.homeSet=value
  }

}
