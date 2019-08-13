import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCorreoComponent } from './nuevo-correo.component';

describe('NuevoCorreoComponent', () => {
  let component: NuevoCorreoComponent;
  let fixture: ComponentFixture<NuevoCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
