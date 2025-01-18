import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelriesComponent } from './jewelries.component';

describe('JewelriesComponent', () => {
  let component: JewelriesComponent;
  let fixture: ComponentFixture<JewelriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
