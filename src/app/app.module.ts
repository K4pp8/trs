import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './container/home/home.component';
import { RobotComponent } from './components/robot/robot.component';
import { PlayableAreaComponent } from './components/playable-area/playable-area.component';
import { CommandsComponent } from './components/commands/commands.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RobotComponent,
    PlayableAreaComponent,
    CommandsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
