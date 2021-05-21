import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDocumentsRecordsComponent } from './seller-documents-records.component';

describe('SellerDocumentsRecordsComponent', () => {
  let component: SellerDocumentsRecordsComponent;
  let fixture: ComponentFixture<SellerDocumentsRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDocumentsRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDocumentsRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
