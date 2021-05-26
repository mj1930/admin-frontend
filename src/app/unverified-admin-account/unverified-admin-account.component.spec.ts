import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedAdminAccountComponent } from './unverified-admin-account.component';

describe('UnverifiedAdminAccountComponent', () => {
  let component: UnverifiedAdminAccountComponent;
  let fixture: ComponentFixture<UnverifiedAdminAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnverifiedAdminAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedAdminAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
