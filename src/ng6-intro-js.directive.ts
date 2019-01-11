import {AfterViewInit, Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Ng6IntroJsService} from "./ng6-intro-js.service";

@Directive({
  selector: '[Ng6IntroJs]'
})
export class Ng6IntroJsDirective implements AfterViewInit{
  ngAfterViewInit(): void {

    setTimeout(()=>{
      this.service.body[this.step]={
        text:this.text,
        top:this.elr.nativeElement.getBoundingClientRect().top,
        left:this.elr.nativeElement.getBoundingClientRect().left,
        width:this.elr.nativeElement.offsetWidth,
        height:this.elr.nativeElement.offsetHeight
      };
      console.log(this.service.body)
    },1000);

  }

  @Input('text')text:string;
  @Input('step')step:number;

  constructor(private service:Ng6IntroJsService,private elr: ElementRef) { }

}
