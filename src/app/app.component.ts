import { Component } from '@angular/core';
import { LedsService } from './services/leds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  led: String = 'off';
  statusLed: String = 'DESLIGADO';
  turn: Boolean = false;
  constructor(private ledsService: LedsService) { }

  mamangerLed() {
    console.log(this.turn);
    this.turn = !this.turn;

    this.led = this.turn ? 'on' : 'off';
    this.statusLed = this.turn ? 'DESLIGADO' : 'LIGADO';
    // this.ledsService.get(this.led).subscribe((result) => {

    // });
  }
}
