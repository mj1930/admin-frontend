import { Component, OnInit } from '@angular/core';
import { UserPermissionService } from '../user-permission.service';

@Component({
  selector: 'app-user-permission',
  templateUrl: './user-permission.component.html',
  styleUrls: ['./user-permission.component.css']
})
export class UserPermissionComponent implements OnInit {

  users = [];
  radioOptions = [
    { text: 'Allow', value: "true" },
    { text: 'DisAllow', value: "false" },
  ]

  constructor(private userPermissionService: UserPermissionService) { }

  ngOnInit(): void {
    this.getUserListing();
    this.getAllPermissions();
  }

  getUserListing() {
    let reqBody = {
      skip: 0,
      limit: 10000
    }
    this.userPermissionService.getUsers(reqBody).subscribe(data => {
      console.log(data);
      this.users = data['data'];
      this.users.forEach(item => {
        item['permission'] = {
          'order': "true",
          'product': "true",
          'seller': "true"
        }
      })
    }, error => {
      console.log(error);
    })
  }

  getAllPermissions() {
    this.userPermissionService.getAllPermission().subscribe(data => {
      console.log(data);
      //this.products = data;
    }, error => {
      console.log(error);
    })
  }

  addPermissions(type, userId) {
    let reqBody = {
      permission: type,
      userId: userId
    }
    this.userPermissionService.addPermission(reqBody).subscribe(data => {
      console.log(data);
      //this.products = data;
    }, error => {
      console.log(error);
    })
  }

  removePermissions(type, userId) {
    let reqBody = {
      permission: type,
      userId: userId
    }
    this.userPermissionService.removePermission(reqBody).subscribe(data => {
      console.log(data);
      //this.products = data;
    }, error => {
      console.log(error);
    })
  }

  changePermission(event, type, userId) {
    if (event.target.value == "true") {
      this.addPermissions(type, userId);
    } else {
      this.removePermissions(type, userId);
    }
    // for(let i=0; i<this.users.length; i++) {
    //   if(this.users[i]._id === userId) {
    //     let keys = Object.keys(this.users[i].permission);
    //     for(let j=0; j<keys.length; j++) {
    //       if(keys[j] === type) {
    //         this.users[i].permission[keys[j]] = event.target.value;
    //       }
    //     }

    //   }
    // }
  }
}
