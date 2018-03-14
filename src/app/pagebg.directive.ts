import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
@Directive({
  selector: "[appBkg]"
})
export class BackgroundImage implements OnInit {
  constructor(private elm: ElementRef, private renderer: Renderer2) {}
  ngOnInit(){
    this.renderer.setStyle(this.elm.nativeElement, 'background-color', 'none')
  }
}
