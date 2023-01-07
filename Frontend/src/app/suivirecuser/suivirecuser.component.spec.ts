import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivirecuserComponent } from './suivirecuser.component';

describe('SuivirecuserComponent', () => {
  let component: SuivirecuserComponent;
  let fixture: ComponentFixture<SuivirecuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivirecuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivirecuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
