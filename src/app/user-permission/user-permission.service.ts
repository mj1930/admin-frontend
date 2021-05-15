import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserPermissionService {

  constructor(private http: HttpClient) { }

  getAllPermission() {
    return this.http.post('permission/list-all-permission', {skip:0, limit: 1000});
  }

  addPermission(reqBody) {
    return this.http.post('permission/add-permission', reqBody);
  }

  removePermission(reqBody) {
    return this.http.post('permission/remove-permission', reqBody);
  }

  getUserPermission(userId) {
    return this.http.get(`permission/list-user-permission/${userId}`);
  }

  getUsers(reqBody) {
    return this.http.post('permission/get-all-users', reqBody);
  }

  approveDisapproveUser(reqBody) {
    return this.http.post('permission/get-all-users', reqBody);
  }
}
