import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProaddComponent } from './proadd.component';

describe('ProaddComponent', () => {
  let component: ProaddComponent;
  let fixture: ComponentFixture<ProaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
