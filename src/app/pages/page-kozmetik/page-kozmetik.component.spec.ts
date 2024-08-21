import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageKozmetikComponent } from './page-kozmetik.component';

describe('PageKozmetikComponent', () => {
  let component: PageKozmetikComponent;
  let fixture: ComponentFixture<PageKozmetikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageKozmetikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageKozmetikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

