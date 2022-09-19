import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTableRows } from 'src/helpers/helper';

import { PlayableAreaComponent } from './playable-area.component';

describe('PlayableAreaComponent', () => {
  let component: PlayableAreaComponent;
  let fixture: ComponentFixture<PlayableAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayableAreaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('robot should not be visible', () => {
    component.rows = [];
    fixture.detectChanges();

    const square = fixture.nativeElement.querySelector('.square');
    expect(square).toBeFalsy();
  });

  it('robot should be visible', () => {
    component.rows = getTableRows(5);
    fixture.detectChanges();

    const square = fixture.nativeElement.querySelector('.square');
    expect(square).toBeTruthy();
  });

  it('robot should be visible in placing mode', () => {
    component.rows = getTableRows(5);
    component.isPlacing = true;
    fixture.detectChanges();

    const square = fixture.nativeElement.querySelector('.isPlacing');
    expect(square).toBeTruthy();
  });

});
