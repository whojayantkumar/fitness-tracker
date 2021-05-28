import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  workoutOptions = ["Crunches", "touch-toes", "side-lunges", "burpees"];
  constructor() { }

  ngOnInit(): void {
  }

}
