import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurDechetsComponent } from './compteur-dechets.component';

describe('CompteurDechetsComponent', () => {
  let component: CompteurDechetsComponent;
  let fixture: ComponentFixture<CompteurDechetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteurDechetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteurDechetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
