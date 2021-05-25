import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-documents-records',
  templateUrl: './seller-documents-records.component.html',
  styleUrls: ['./seller-documents-records.component.css']
})
export class SellerDocumentsRecordsComponent implements OnInit {

  user: any;
  id: string = '';
  constructor(
    private router: ActivatedRoute,
    private sellerSerivce: SellerService
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.url[1].path;
    this.getSellerDetails();
  }

  getSellerDetails() {
    this.sellerSerivce.getSellerDetails({id: this.id}).subscribe((resp: any) => {
      if (resp.code == 200) {
        this.user = resp['data'];
      }
    })
  }

}
