import { Component, OnInit } from '@angular/core';
import { getCurrentPositionAfterMoved, getFacingAfterRotaing, getTableRows } from 'src/helpers/helper';
import { Command, Facing, Place } from 'src/models/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '(document:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class HomeComponent implements OnInit {

  rows: Place[][] = [];
  currentPosition: Place | undefined;
  currentFacing: Facing = 'NORTH';
  isPlacing = true;
  isReporting = false;
  size = 5;

  ngOnInit(): void {
    this.rows = getTableRows(this.size)
  }

  handleKeyboardEvents(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowUp':
        this.command('Move');
        break;

      case 'ArrowLeft':
        this.command('Left');
        break;

      case 'ArrowRight':
        this.command('Right');
        break;

      default:
        break;
    }
  }

  command(command: Command) {

    this.isReporting = false;

    switch (command) {
      case 'Place':
        this.isPlacing = true;
        break;

      case "Move":
        if (this.currentPosition) {
          this.currentPosition = getCurrentPositionAfterMoved(this.currentPosition, this.currentFacing, this.size);
        }
        break;

      case "Left":
        this.currentFacing = getFacingAfterRotaing(this.currentFacing, false);
        break;

      case "Right":
        this.currentFacing = getFacingAfterRotaing(this.currentFacing, true);
        break;

      case "Report":
        this.isReporting = true;
        break;

      default:
        break;
    }
  }

  squareSelected(place: { x: number, y: number, facing?: Facing }) {
    if (this.isPlacing) {
      this.currentPosition = place;
      this.currentFacing = place.facing ? place.facing : 'NORTH';
      this.isPlacing = false;
    }
  }
}
