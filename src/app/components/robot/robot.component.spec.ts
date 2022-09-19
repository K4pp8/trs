import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotComponent } from './robot.component';

describe('RobotComponent', () => {
  let component: RobotComponent;
  let fixture: ComponentFixture<RobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RobotComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('robot should be visible', () => {
    component.currentPosition = undefined;
    fixture.detectChanges();

    const robot = fixture.nativeElement.querySelector('.robot');
    expect(robot).toBeFalsy();
  });

  it('robot should not be visible', () => {
    component.currentPosition = { x: 0, y: 0 };
    fixture.detectChanges();

    const robot = fixture.nativeElement.querySelector('.robot');
    expect(robot).toBeTruthy();
  });
});
