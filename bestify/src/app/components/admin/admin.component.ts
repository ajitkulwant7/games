import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  pie: any = 'PieChart';
  piedata: any[] = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ];

  combo: any = 'ComboChart';
  combodata: any = [
    ['Account', 3, 2, 2.5],
    ['HR', 2, 3, 2.5],
    ['IT', 1, 5, 3],
    ['Sales', 3, 9, 6],
    ['Marketing', 4, 2, 3],
  ];
  constructor() {}

  ngOnInit(): void {}
}
