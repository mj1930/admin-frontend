import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unverified-admin-account',
  templateUrl: './unverified-admin-account.component.html',
  styleUrls: ['./unverified-admin-account.component.css']
})
export class UnverifiedAdminAccountComponent implements OnInit {

  userName: string = '';
  constructor() { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.userName = user.name;
  }

}
