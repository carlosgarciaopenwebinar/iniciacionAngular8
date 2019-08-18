import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCorreoComponent } from './visualizar-correo.component';

describe('VisualizarCorreoComponent', () => {
  let component: VisualizarCorreoComponent;
  let fixture: ComponentFixture<VisualizarCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
