import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPubliciteComponent } from './ajout-publicite.component';

describe('AjoutPubliciteComponent', () => {
  let component: AjoutPubliciteComponent;
  let fixture: ComponentFixture<AjoutPubliciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPubliciteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPubliciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
