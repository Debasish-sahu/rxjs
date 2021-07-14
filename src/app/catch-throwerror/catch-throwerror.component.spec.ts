import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchThrowerrorComponent } from './catch-throwerror.component';

describe('CatchThrowerrorComponent', () => {
  let component: CatchThrowerrorComponent;
  let fixture: ComponentFixture<CatchThrowerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchThrowerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchThrowerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
