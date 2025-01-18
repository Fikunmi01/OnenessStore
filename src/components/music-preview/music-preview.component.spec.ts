import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPreviewComponent } from './music-preview.component';

describe('MusicPreviewComponent', () => {
  let component: MusicPreviewComponent;
  let fixture: ComponentFixture<MusicPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
