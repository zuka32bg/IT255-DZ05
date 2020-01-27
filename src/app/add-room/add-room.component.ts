import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomModel } from '../room//room.model'

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  public roomForm: FormGroup;
  @Output() roomToAdd: EventEmitter<RoomModel>;

  constructor() {
    this.roomToAdd = new EventEmitter();
  }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.roomForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      link: new FormControl('', [
        Validators.required
      ])
    });
  }

  public submitForm() {
    let tip = this.roomForm.get('tip').value;
    let cena = this.roomForm.get('cena').value;
    let brojsoba = this.roomForm.get('brojsoba').value;
    let video = new RoomModel(tip, cena, brojsoba);
    this.roomToAdd.emit(video);
  }

  public getPrice(numberOfNights: number, cena, brojsoba) {
    numberOfNights = ((cena * brojsoba))
    return numberOfNights;
  }

}
