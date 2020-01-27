import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { RoomModel } from './room.model'

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Output() roomToDelete: EventEmitter<RoomModel> = new EventEmitter();;
  @Output() updateRoom: EventEmitter<RoomModel> = new EventEmitter();;

  @HostBinding('attr.class') cssClass = 'row';
  @Input() soba: RoomModel;

  constructor() {

  }

  public deleteRoom(): void {
    this.roomToDelete.emit(this.soba);
  }
  public changeContent(): void {
    this.updateRoom.emit(this.soba);
  }

  public getPrice(numberOfNights: number, cena, brojsoba) {
    numberOfNights = ((cena * brojsoba))
    return numberOfNights;
  }

  ngOnInit() {
  }
}
