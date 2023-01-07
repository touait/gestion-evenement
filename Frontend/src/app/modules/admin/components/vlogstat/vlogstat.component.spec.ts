import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogstatComponent } from './vlogstat.component';

describe('VlogstatComponent', () => {
  let component: VlogstatComponent;
  let fixture: ComponentFixture<VlogstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlogstatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
