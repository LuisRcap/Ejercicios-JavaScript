import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
declare const $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() public anchura: number;
  @Input('etiquetas') public captions: null | boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor(){
    this.anchura = 0;
    this.captions = null;

    this.autor = {
      nombre: "Luis Rico",
      website: "www.github.com/LuisRcap",
      youtube: "Ninguno"
    };
  }

  ngOnInit(): void {
    $('header').css('backgraund', 'green');
    $("#logo").click(function(e:any){
      e.preventDefault();
      $("header").css("background", 'green')
                 .css("height", "50px");
    });

    $(".galeria").bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

  lanzar(event: any){
    this.conseguirAutor.emit(this.autor);
  }

}
