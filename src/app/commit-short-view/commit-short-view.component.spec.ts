import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitShortViewComponent } from './commit-short-view.component';

describe('CommitShortViewComponent', () => {
  let component: CommitShortViewComponent;
  let fixture: ComponentFixture<CommitShortViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitShortViewComponent]
    });
    fixture = TestBed.createComponent(CommitShortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
