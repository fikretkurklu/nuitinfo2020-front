import { ComponentFixture, TestBed } from '@angular/core/testing';

import { photoprofilComponent } from './photoprofil.component';

describe('photoprofilComponent', () => {
  let component: photoprofilComponent;
  let fixture: ComponentFixture<photoprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ photoprofilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(photoprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
