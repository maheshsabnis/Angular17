import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDemoComponent } from './change-demo.component';

describe('ChangeDemoComponent', () => {
  let component: ChangeDemoComponent;
  let fixture: ComponentFixture<ChangeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
