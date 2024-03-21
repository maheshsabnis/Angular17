import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDemoChildComponent } from './change-demo-child.component';

describe('ChangeDemoChildComponent', () => {
  let component: ChangeDemoChildComponent;
  let fixture: ComponentFixture<ChangeDemoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDemoChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
