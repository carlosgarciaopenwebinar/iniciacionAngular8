import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosComponent } from './avisos.component';

describe('AvisosComponent', () => {
  let component: AvisosComponent;
  let fixture: ComponentFixture<AvisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
