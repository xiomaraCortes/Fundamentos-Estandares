import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSoftComponent } from './registro-soft.component';

describe('RegistroSoftComponent', () => {
  let component: RegistroSoftComponent;
  let fixture: ComponentFixture<RegistroSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
