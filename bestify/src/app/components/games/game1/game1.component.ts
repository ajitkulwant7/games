import { Component, OnInit } from '@angular/core';
declare function showScore1(): any;
declare function getScore(): any;

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class Game1Component implements OnInit {

  score: any;
  constructor() { }
  ngOnInit(): void {
    var test = showScore1();
    console.log(test);
    let inter1 = setInterval(() => {
      console.log(getScore());
      this.score = getScore();
      if (this.score != undefined) {
        clearInterval(inter1);
      }
    }, 2000);
  }

}
