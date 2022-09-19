import { Component, Input } from '@angular/core';
import { Facing, Place } from 'src/models/model';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent {
  @Input() currentPosition: Place | undefined;
  @Input() currentFacing: Facing = 'NORTH';
  facingMap = {
    "NORTH": 0,
    "EAST": 90,
    "SOUTH": 180,
    "WEST": 270,
  }
}
