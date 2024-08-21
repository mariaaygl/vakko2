import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShoesBagsComponent } from './page-shoes-bags.component';

describe('ShoesBagsComponent', () => {
  let component: PageShoesBagsComponent;
  let fixture: ComponentFixture<PageShoesBagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageShoesBagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageShoesBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
