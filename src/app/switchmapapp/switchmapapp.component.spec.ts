import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapappComponent } from './switchmapapp.component';

describe('SwitchmapappComponent', () => {
  let component: SwitchmapappComponent;
  let fixture: ComponentFixture<SwitchmapappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchmapappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchmapappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
