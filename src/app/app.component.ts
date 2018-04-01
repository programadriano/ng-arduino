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
  statusLed: String = 'LIGAR';
  turn: Boolean = false;
  constructor(private ledsService: LedsService) { }

  mamangerLed() {
    console.log(this.turn);
    this.turn = !this.turn;

    this.led = this.turn ? 'on' : 'off';
    this.statusLed = this.turn ? 'DESLIGAR' : 'LIGAR';
     this.ledsService.get(this.led).subscribe((result) => {

     });
  }
}
