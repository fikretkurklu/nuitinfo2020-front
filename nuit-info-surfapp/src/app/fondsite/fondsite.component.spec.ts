import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondsiteComponent } from './fondsite.component';

describe('FondsiteComponent', () => {
  let component: FondsiteComponent;
  let fixture: ComponentFixture<FondsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
