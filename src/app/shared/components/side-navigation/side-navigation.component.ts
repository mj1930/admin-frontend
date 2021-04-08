import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  showSubMenu = false;
  showOrderSubMenu = false;
  userName = '';
  permissions = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
let user = JSON.parse(localStorage.getItem('user'));
    this.userName = user.name;
    this.permissions = user.permissions.permissions;
  }

  closeSidebar() {
    $(".page-wrapper").removeClass("toggled");
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  }  

  logout() {
    sessionStorage.setItem('token', '');
    this.router.navigateByUrl('/auth/login');
  }

}
