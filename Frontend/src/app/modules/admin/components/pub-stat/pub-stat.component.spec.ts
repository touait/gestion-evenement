import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubStatComponent } from './pub-stat.component';

describe('PubStatComponent', () => {
  let component: PubStatComponent;
  let fixture: ComponentFixture<PubStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
