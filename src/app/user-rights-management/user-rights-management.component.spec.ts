import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRightsManagementComponent } from './user-rights-management.component';

describe('UserRightsManagementComponent', () => {
  let component: UserRightsManagementComponent;
  let fixture: ComponentFixture<UserRightsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRightsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRightsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
