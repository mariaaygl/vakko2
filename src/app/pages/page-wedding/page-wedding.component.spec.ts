import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWeddingComponent } from './page-wedding.component';

describe('PageWeddingComponent', () => {
  let component: PageWeddingComponent;
  let fixture: ComponentFixture<PageWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageWeddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

