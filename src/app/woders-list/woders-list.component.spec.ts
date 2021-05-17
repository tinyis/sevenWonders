import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WodersListComponent } from './woders-list.component';

describe('WodersListComponent', () => {
  let component: WodersListComponent;
  let fixture: ComponentFixture<WodersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WodersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WodersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
