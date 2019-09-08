import { Component, OnInit } from '@angular/core';
import {PlayersInterface} from './players.interface';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  name: string ="";
  showImage: boolean;
  height: number = 50;
  width: number = 50;
  filterText: string = '';

  filteredPlayers: PlayersInterface[];
  players : PlayersInterface[] = [
    {
       "name":"Cristiano Ronaldo",
       "age": 34,
       "team":"Juventus FC",
       "wages": 12000000,
       "rating": 9.8,
       "url":"./assets/images/ronaldo.jpg"
    },
    {
       "name":"Sergio Ramos",
       "age": 32,
       "team":"Real Madrid CF",
       "wages": 10100000,
       "rating": 9,
       "url":"./assets/images/ramos.jpg"
    },
    {
       "name":"James Rodriguez",
       "age": 29,
       "team":"Bayern Munich",
       "wages": 9000000,
       "rating": 8,
       "url":"./assets/images/james.jpg"
    },
    {
       "name":"Angad Sandhu",
       "age": 24,
       "team":"Mohali FC",
       "wages": 70000,
       "rating": 7,
       "url":"./assets/images/simon.jpg"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  toggleImages(){
    return this.showImage = !this.showImage;
  }

  getFilteredPlayers() : string {
    return this.filterText;
  }

  setFilteredPlayers(value: string){
    // this.filterText = value;
    // this.filteredPlayers  = this.filterText ? this.filter(this.filterText) : this.players;
  }

  // filter(value): PlayersInterface[]{
  //   console.log('');
  //   value= value.toLocaleLowerCase();
  //   return this.players.filter(player:)=>{
  //     player.name.
  //   }

  // }

}
