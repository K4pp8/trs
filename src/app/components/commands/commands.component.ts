import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Place, Facing, Command } from 'src/models/model';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent {

  @Input() currentPosition: Place | undefined;
  @Input() currentFacing: Facing = 'NORTH';
  @Input() size = 0;
  @Input() isPlacing = true;
  @Input() isReporting = false;
  @Output() command = new EventEmitter<Command>();
  @Output() squareSelected = new EventEmitter<{ x: number, y: number, facing: Facing }>();

  placingForm = new FormGroup({
    x: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(5)]),
    y: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(5)]),
    facing: new FormControl('NORTH')
  });

  submit() {
    if (this.placingForm.valid && this.placingForm.value) {
      this.squareSelected.emit(this.placingForm.value);
    }
  }
}
