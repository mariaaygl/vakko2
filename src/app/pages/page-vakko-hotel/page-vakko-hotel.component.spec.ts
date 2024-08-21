import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVakkoHotelComponent } from './page-vakko-hotel.component';

describe('PageVakkoHotelComponent', () => {
  let component: PageVakkoHotelComponent;
  let fixture: ComponentFixture<PageVakkoHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageVakkoHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVakkoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

