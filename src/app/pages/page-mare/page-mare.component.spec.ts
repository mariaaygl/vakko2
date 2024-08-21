import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMareComponent } from './page-mare.component';

describe('PageMareComponent', () => {
  let component: PageMareComponent;
  let fixture: ComponentFixture<PageMareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
