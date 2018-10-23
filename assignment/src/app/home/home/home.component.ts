import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { CommonService } from 'src/app/login/service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: any;
  constructor(private router: Router,
    private commonService: CommonService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user === null) {
      this.router.navigate(['/login']);
      return;
    }
  }

  ngOnInit() {
  }

  deleteAccount() {
    const userFireBase = firebase.auth().currentUser;

    userFireBase.delete().then(function () {
      this.commonService.openSnackBar('Your account has been deleted');
    }).catch(function (error) {
      this.commonService.openSnackBar('Some error occured, code: ' + error.code + ' message:' + error.message, '');
      return;
    });
  }

  logoutUser() {
    firebase.auth().signOut().then((data) => {
      console.log(data);
      localStorage.clear();
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.commonService.openSnackBar('Some error occured, code: ' + error.code + ' message:' + error.message, '');
      return;
    });
  }
}
