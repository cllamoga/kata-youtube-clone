import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRowComponent } from './side-row.component';

describe('SideRowComponent', () => {
  let component: SideRowComponent;
  let fixture: ComponentFixture<SideRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideRowComponent]
    });
    fixture = TestBed.createComponent(SideRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
