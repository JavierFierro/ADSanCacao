import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaAgricultorComponent } from './firma-agricultor.component';

describe('FirmaAgricultorComponent', () => {
  let component: FirmaAgricultorComponent;
  let fixture: ComponentFixture<FirmaAgricultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmaAgricultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmaAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
