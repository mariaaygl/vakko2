import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCoutureComponent } from './page-couture.component';

describe('PageCoutureComponent', () => {
  let component: PageCoutureComponent;
  let fixture: ComponentFixture<PageCoutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCoutureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCoutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
