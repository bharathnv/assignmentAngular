import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
// import * as twilio from 'twilio';
// import * as Chat from 'twilio-chat';
declare const Twilio: any;

import { CommonService } from '../../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CommonService]
})
export class HomeComponent implements OnInit {
  public user: any;
  private accountSid = '';
  private authToken = '';
  constructor(private router: Router,
    private commonService: CommonService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user === null) {
      this.router.navigate(['/login']);
      return;
    }
    this.accountSid = 'AC1272f00ea8d0ce83270e9354459fe7d2';
    this.authToken = '9d19332df30ae8b49efe78f8381498e8';
  }

  ngOnInit() {
  }

  deleteAccount() {
    const userFireBase = firebase.auth().currentUser;
    const that = this;
    userFireBase.delete().then(function () {
      that.commonService.openSnackBar('Your account has been deleted', '');
      localStorage.clear();
      that.router.navigate(['/login']);
    }).catch(function (error) {
      that.commonService.openSnackBar('Some error occured, code: ' + error.code + ' message:' + error.message, '');
      return;
    });
  }

  logoutUser() {
    firebase.auth().signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.commonService.openSnackBar('Some error occured, code: ' + error.code + ' message:' + error.message, '');
      return;
    });
  }

  sendSMS() {
    // const client = twilio(this.accountSid, this.authToken);

    // client.messages.create({
    //   body: 'Hello from Node',
    //   to: '+918867509556',  // Text this number
    //   from: '+14693821408' // From a valid Twilio number
    // })
    //   .then((message) => {
    //     console.log(message);
    //   });
    // Chat.Client.create('9d19332df30ae8b49efe78f8381498e8').then(client => {
    //   console.log(client);
    // });
    Twilio.Chat.Client.create('9d19332df30ae8b49efe78f8381498e8').then((client) => {
      console.log(client);
    });
  }
}
