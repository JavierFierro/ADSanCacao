import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosVerificacionComponent } from './formularios-verificacion.component';

describe('FormulariosVerificacionComponent', () => {
  let component: FormulariosVerificacionComponent;
  let fixture: ComponentFixture<FormulariosVerificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosVerificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosVerificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
