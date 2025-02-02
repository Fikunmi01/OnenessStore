import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDComponent } from './cd.component';

describe('CDComponent', () => {
  let component: CDComponent;
  let fixture: ComponentFixture<CDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
