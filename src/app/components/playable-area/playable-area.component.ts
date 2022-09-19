import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Facing, Place } from 'src/models/model';

@Component({
  selector: 'app-playable-area',
  templateUrl: './playable-area.component.html',
  styleUrls: ['./playable-area.component.scss']
})
export class PlayableAreaComponent {

  @Input() rows: Place[][] = [];
  @Input() currentPosition: Place | undefined;
  @Input() currentFacing: Facing = 'NORTH';
  @Input() isPlacing = true;
  @Output() squareSelected = new EventEmitter<Place>();
}
