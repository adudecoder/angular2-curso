import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projeto2Component } from './projeto2.component';

describe('Projeto2Component', () => {
  let component: Projeto2Component;
  let fixture: ComponentFixture<Projeto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projeto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projeto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
