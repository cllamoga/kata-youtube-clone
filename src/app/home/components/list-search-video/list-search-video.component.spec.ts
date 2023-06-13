import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSearchVideoComponent } from './list-search-video.component';

describe('ListSearchVideoComponent', () => {
  let component: ListSearchVideoComponent;
  let fixture: ComponentFixture<ListSearchVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSearchVideoComponent]
    });
    fixture = TestBed.createComponent(ListSearchVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
