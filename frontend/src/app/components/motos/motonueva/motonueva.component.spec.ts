import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotonuevaComponent } from './motonueva.component';

describe('MotonuevaComponent', () => {
  let component: MotonuevaComponent;
  let fixture: ComponentFixture<MotonuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotonuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotonuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
