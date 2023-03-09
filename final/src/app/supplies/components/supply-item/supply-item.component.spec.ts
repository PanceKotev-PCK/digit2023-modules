import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyItemComponent } from './supply-item.component';

describe('SupplyItemComponent', () => {
  let component: SupplyItemComponent;
  let fixture: ComponentFixture<SupplyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
