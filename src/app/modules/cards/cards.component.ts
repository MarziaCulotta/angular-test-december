import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angtest-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() name!: string;
  @Input() country!: string;
  @Input() description!: string;
  @Input() temp!: string;
  @Input() icon!: string;

  public today = new Date();

  constructor() {}

  ngOnInit(): void {}

  // convert() {
  //  return (parseInt(this.temp) - 32) * 5.0/9.0;
  // }

}
