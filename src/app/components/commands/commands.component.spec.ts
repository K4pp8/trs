import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsComponent } from './commands.component';

describe('CommandsComponent', () => {
  let component: CommandsComponent;
  let fixture: ComponentFixture<CommandsComponent>;
  let reporting: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the reporting', () => {
    component.isReporting = false;
    fixture.detectChanges();

    const reporting = fixture.nativeElement.querySelector('.reporting');
    expect(reporting).toBeFalsy();
  });

  it('should display the reporting', () => {
    component.isReporting = true;
    component.currentPosition = { x: 1, y: 2 }
    component.currentFacing = 'NORTH'
    fixture.detectChanges();

    const reporting = fixture.nativeElement.querySelector('.reporting');
    expect(reporting.textContent).toBe('The Robot has X:1, Y:2 and Facing:NORTH');
  });

  it('should display the place box', () => {
    component.isPlacing = true;
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('.form');
    expect(form).toBeTruthy();
  });

  it('should not display the place box', () => {
    component.isPlacing = false;
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('.form');
    expect(form).toBeFalsy();
  });
});
