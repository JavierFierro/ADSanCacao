import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroquisComponent } from './croquis.component';

describe('CroquisComponent', () => {
  let component: CroquisComponent;
  let fixture: ComponentFixture<CroquisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroquisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroquisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
