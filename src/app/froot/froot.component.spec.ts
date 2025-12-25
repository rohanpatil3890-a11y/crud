import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrootComponent } from './froot.component';

describe('FrootComponent', () => {
  let component: FrootComponent;
  let fixture: ComponentFixture<FrootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
