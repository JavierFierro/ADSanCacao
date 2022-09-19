import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionPlantasComponent } from './revision-plantas.component';

describe('RevisionPlantasComponent', () => {
  let component: RevisionPlantasComponent;
  let fixture: ComponentFixture<RevisionPlantasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionPlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
