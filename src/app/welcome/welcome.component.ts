import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  items = [
    {title: "ACTIVITY",
    content: "Stay active and enjoy better health and more fun!"
  },
    {title: "COMMUNITY",
    content: "Get to know other people who share your passion!"
  },
    {title: "CHALLENGES",
    content: "Never stop! Dive into new challenges every day."
  },
      ]
  constructor() { }

  ngOnInit(): void {
  }

}
