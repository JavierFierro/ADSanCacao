import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgricultorComponent } from './edit-agricultor.component';

describe('EditAgricultorComponent', () => {
  let component: EditAgricultorComponent;
  let fixture: ComponentFixture<EditAgricultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgricultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
