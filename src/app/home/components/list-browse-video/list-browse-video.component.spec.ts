import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBrowseVideoComponent } from './list-browse-video.component';

describe('ListBrowseVideoComponent', () => {
  let component: ListBrowseVideoComponent;
  let fixture: ComponentFixture<ListBrowseVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBrowseVideoComponent]
    });
    fixture = TestBed.createComponent(ListBrowseVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
