import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  // ! - vai ser definido algum momento
  @Input() card!: Location;

  constructor() {}

  ngOnInit(): void {
    
  }
}
