import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredListComponent } from './stored-list.component';

describe('StoredListComponent', () => {
  let component: StoredListComponent;
  let fixture: ComponentFixture<StoredListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
