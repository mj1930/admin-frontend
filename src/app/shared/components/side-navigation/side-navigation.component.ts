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
  hasPermissions = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.userName = user.name;
    if (user.permissions) {
      this.hasPermissions = true;
      this.permissions = user.permissions.permissions;
    }
  }

  closeSidebar() {
    $(".page-wrapper").removeClass("toggled");
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  }  

  logout() {
    sessionStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    this.router.navigateByUrl('/auth/login');
  }

}
