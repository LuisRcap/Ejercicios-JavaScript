import { Component, Input, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() public anchura: number;
  @Input('etiquetas') public captions: null | boolean;

  constructor(){
    this.anchura = 0;
    this.captions = null;
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

}
