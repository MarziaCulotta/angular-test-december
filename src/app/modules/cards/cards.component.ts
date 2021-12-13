import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angtest-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() name!: string;
  @Input() description!: string;
  @Input() temp!: number;
  @Input() icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
