import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Data;
  distance: number;
  full: any;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.db.list('/').valueChanges().subscribe(
      data => {
        this.distance = 21 - Number(data[0]);
        this.full = data[1];
      }
    );
  }

}
