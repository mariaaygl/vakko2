import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErkekComponent } from './page-erkek.component';

describe('PageErkekComponent', () => {
  let component: PageErkekComponent;
  let fixture: ComponentFixture<PageErkekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageErkekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageErkekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

