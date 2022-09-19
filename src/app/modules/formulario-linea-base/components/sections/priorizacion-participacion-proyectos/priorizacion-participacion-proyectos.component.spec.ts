import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorizacionParticipacionProyectosComponent } from './priorizacion-participacion-proyectos.component';

describe('PriorizacionParticipacionProyectosComponent', () => {
  let component: PriorizacionParticipacionProyectosComponent;
  let fixture: ComponentFixture<PriorizacionParticipacionProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorizacionParticipacionProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorizacionParticipacionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
