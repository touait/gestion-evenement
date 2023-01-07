import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPubliciteComponent } from './list-publicite.component';

describe('ListPubliciteComponent', () => {
  let component: ListPubliciteComponent;
  let fixture: ComponentFixture<ListPubliciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPubliciteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPubliciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
