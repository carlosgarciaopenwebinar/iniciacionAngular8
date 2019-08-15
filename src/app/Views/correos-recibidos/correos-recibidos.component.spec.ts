import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreosRecibidosComponent } from './correos-recibidos.component';

describe('CorreosRecibidosComponent', () => {
  let component: CorreosRecibidosComponent;
  let fixture: ComponentFixture<CorreosRecibidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreosRecibidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreosRecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
