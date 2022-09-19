import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultoresComponent } from './agricultores.component';

describe('AgricultoresComponent', () => {
  let component: AgricultoresComponent;
  let fixture: ComponentFixture<AgricultoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgricultoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricultoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
