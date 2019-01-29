import { SearchBar } from 'ui/search-bar';
import { Component, OnInit } from '@angular/core';
import * as application from 'application';
import { RouterExtensions } from 'nativescript-angular/router';
var TnsOneSignal = require('nativescript-onesignal').TnsOneSignal

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'parking-lot';

  textFieldValue: string = "";

  onButtonTap(): void {
      console.log("Button was pressed");
  }

  searchPhrase: string;
  onSearchSubmit(): void {
      console.log("You are searching for " + this.textFieldValue);
  }

  onTaylorSwiftTap(): void {
      this.routerExtensions.navigate(["/detail"], {animated: true, transition: {name: 'fade', duration: 300}});
  }

  constructor(private routerExtensions: RouterExtensions) {
    
  }

  initAndroidPush() {


    if (application.android) {
      console.dir('TnsOneSignal1');
        try {
          TnsOneSignal.startInit(application.android.context).init()
        } catch (error) {
          console.error('error', error);
        }
    }
  }

  ngOnInit() {
    this.initAndroidPush();
  }
}
