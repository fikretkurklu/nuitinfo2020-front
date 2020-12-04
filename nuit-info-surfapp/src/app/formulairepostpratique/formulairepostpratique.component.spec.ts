import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairepostpratiqueComponent } from './formulairepostpratique.component';

describe('FormulairepostpratiqueComponent', () => {
  let component: FormulairepostpratiqueComponent;
  let fixture: ComponentFixture<FormulairepostpratiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairepostpratiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairepostpratiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
