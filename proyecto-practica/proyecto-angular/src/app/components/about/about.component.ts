import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public web: string;

  constructor(){
    this.title = "Luis Rico";
    this.subtitle = "Desarrollador web y estudiante";
    this.web = "www.github.com/LuisRcap";
  }

  ngOnInit(): void {
  }

}
