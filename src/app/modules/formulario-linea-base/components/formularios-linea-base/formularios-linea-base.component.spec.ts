import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosLineaBaseComponent } from './formularios-linea-base.component';

describe('FormulariosLineaBaseComponent', () => {
  let component: FormulariosLineaBaseComponent;
  let fixture: ComponentFixture<FormulariosLineaBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosLineaBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosLineaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
