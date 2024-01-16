import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPrestadosComponent } from './servico-prestados.component';

describe('ServicoPrestadosComponent', () => {
  let component: ServicoPrestadosComponent;
  let fixture: ComponentFixture<ServicoPrestadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicoPrestadosComponent]
    });
    fixture = TestBed.createComponent(ServicoPrestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
