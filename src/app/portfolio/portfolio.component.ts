import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  imagesArray: string[] = [
    '../../assets/images/cabin.png',
    '../../assets/images/cake.png',
    '../../assets/images/circus.png',
    '../../assets/images/game.png',
    '../../assets/images/safe.png',
    '../../assets/images/submarine.png',
  ];
  constructor() {}

  ngOnInit(): void {}
}
