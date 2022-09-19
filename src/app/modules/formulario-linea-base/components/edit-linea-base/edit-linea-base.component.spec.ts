import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLineaBaseComponent } from './edit-linea-base.component';

describe('EditLineaBaseComponent', () => {
  let component: EditLineaBaseComponent;
  let fixture: ComponentFixture<EditLineaBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLineaBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLineaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
