import { Injectable } from '@angular/core';
import { RoomModel } from '../room/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  getPrice(): RoomModel[] {
    return [

    ];
  }

  constructor() { }
}
