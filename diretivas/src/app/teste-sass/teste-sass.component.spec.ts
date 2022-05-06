import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteSassComponent } from './teste-sass.component';

describe('TesteSassComponent', () => {
  let component: TesteSassComponent;
  let fixture: ComponentFixture<TesteSassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteSassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteSassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
