import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVakkoramaComponent } from './page-vakkorama.component';

describe('PageVakkoramaComponent', () => {
  let component: PageVakkoramaComponent;
  let fixture: ComponentFixture<PageVakkoramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageVakkoramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVakkoramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
