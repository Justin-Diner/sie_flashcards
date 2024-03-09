import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectListDropdownComponent } from './subject-list-dropdown.component';

describe('SubjectListDropdownComponent', () => {
  let component: SubjectListDropdownComponent;
  let fixture: ComponentFixture<SubjectListDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectListDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectListDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
