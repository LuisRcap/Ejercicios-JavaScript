import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
declare const $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;

  constructor(){
    this.widthSlider = 0;
    this.anchuraToSlider = 0;
    this.captions = true;
  }

  ngOnInit(): void {
    
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = false;
  }

}
