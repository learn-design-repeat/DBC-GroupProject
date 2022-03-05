import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pageContent = { 
     header: { 
       title: 'My List of Instrument',
        body: 'This is a list of  instruments'  
       }
      }
    }
