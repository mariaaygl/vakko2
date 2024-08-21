import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLatelierComponent } from './page-latelier.component';

describe('PageLatelierComponent', () => {
  let component: PageLatelierComponent;
  let fixture: ComponentFixture<PageLatelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLatelierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLatelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

