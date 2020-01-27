import { Component, Output, Input } from '@angular/core';
import { RoomModel } from './room/room.model';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { RoomServiceService } from './services/room-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() sobe: RoomModel[];


  constructor(private _RoomService: RoomServiceService) {
    this.sobe = [];
  }

  addRoom(tip: HTMLInputElement, cena: HTMLInputElement, brojnoci: HTMLInputElement): boolean {
    console.log(`Dodavanje sobe, naziv: ${tip.value}, cena: ${cena.value}, broj nocenja: ${brojnoci.value}`);
    this.sobe.push(new RoomModel(tip.value, cena.valueAsNumber, brojnoci.valueAsNumber));
    return false;
  }

  private _generateString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public removeRoom(sobe: RoomModel) {
    this.sobe = this.sobe.filter(item => {
      return item.tip !== sobe.tip
    })
  } F

  public updateRoom(sobe: RoomModel) {
    let index = this.sobe.findIndex(i => i.tip === sobe.tip);
    this.sobe[index].tip = this._generateString(6);
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  random() {
    this.shuffle(this.sobe);
  }

  form = new FormGroup({
    nazivSobeForma: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cenaSobeForma: new FormControl('', Validators.required),
    brojnociSobeForma: new FormControl('', Validators.required)
  })

  public getPrice(numberOfNights: number, cena, brojsoba) {
    numberOfNights = ((cena * brojsoba))
    return numberOfNights;
  }

}
