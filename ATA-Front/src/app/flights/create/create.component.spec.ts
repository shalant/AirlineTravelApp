import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: FCreateComponent;
  let fixture: ComponentFixture<FCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
