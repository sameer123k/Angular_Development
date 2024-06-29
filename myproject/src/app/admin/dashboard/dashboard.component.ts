import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 hello="Welcome to Dashboard"

homeSet:any = 'Home'

  toggleActive(value:any) {
    this.homeSet=value
  }

}
