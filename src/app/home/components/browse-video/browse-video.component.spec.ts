import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseVideoComponent } from './browse-video.component';

describe('BrowseVideoComponent', () => {
  let component: BrowseVideoComponent;
  let fixture: ComponentFixture<BrowseVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseVideoComponent]
    });
    fixture = TestBed.createComponent(BrowseVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
