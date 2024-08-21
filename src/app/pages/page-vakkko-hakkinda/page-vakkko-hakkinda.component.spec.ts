import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVakkkoHakkindaComponent } from './page-vakkko-hakkinda.component';

describe('PageVakkkoHakkindaComponent', () => {
  let component: PageVakkkoHakkindaComponent;
  let fixture: ComponentFixture<PageVakkkoHakkindaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageVakkkoHakkindaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVakkkoHakkindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

