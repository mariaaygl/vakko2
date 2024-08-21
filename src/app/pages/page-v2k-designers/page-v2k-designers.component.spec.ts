import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageV2kDesignersComponent } from './page-v2k-designers.component';

describe('PageV2kDesignersComponent', () => {
  let component: PageV2kDesignersComponent;
  let fixture: ComponentFixture<PageV2kDesignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageV2kDesignersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageV2kDesignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
