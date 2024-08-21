import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageKadinComponent } from './page-kadin.component';

describe('PageKadinComponent', () => {
  let component: PageKadinComponent;
  let fixture: ComponentFixture<PageKadinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageKadinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageKadinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
