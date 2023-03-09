import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetGridComponent } from './pet-grid.component';

describe('PetGridComponent', () => {
  let component: PetGridComponent;
  let fixture: ComponentFixture<PetGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
