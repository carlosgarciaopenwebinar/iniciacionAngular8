import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCorreosComponent } from './lista-correos.component';

describe('ListaCorreosComponent', () => {
  let component: ListaCorreosComponent;
  let fixture: ComponentFixture<ListaCorreosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCorreosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCorreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
