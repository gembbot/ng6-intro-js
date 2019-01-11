import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Ng6IntroJsService} from "../ng6-intro-js.service";

@Component({
  selector: 'ng6-intro-js',
  templateUrl: './ng6-intro-js.component.html',
  styleUrls: ['./ng6-intro-js.component.css']
})
export class Ng6IntroJsComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.w=this.ngIntroJs.nativeElement.offsetWidth/2;
      this.h=this.ngIntroJs.nativeElement.offsetHeight/2;

      this.wData=this.ngIntroJsData.nativeElement.offsetWidth;
      this.hData=this.ngIntroJsData.nativeElement.offsetHeight;
      console.log(this.w,this.h,this.wData,this.hData)
    },1200)

  }
  private option:any={
    nextBtn:{color:"#a1ff8a",text:"Next"},
    backBtn:{color:"#ff9795",text:"Back"},
    finishBtn:{color:"#b9b2ff",text:"Finish"}
  };
  @Input()OptionIntro:any={};
  @ViewChild("ngIntroJs")ngIntroJs:ElementRef;
  @ViewChild("ngIntroJsData")ngIntroJsData:ElementRef;
  @Input()step:number=0;
  private w:number;
  private h:number;

  private wData:number;
  private hData:number;
  isNextBackBtn:boolean=true;
  constructor(private service:Ng6IntroJsService) {

  }
  public setStepAndStart(number:number){
    this.service.step=number;
    this.service.status=true;
  }
  public setStep(number:number){
    this.service.step=number;
  }
  public stop(){
    this.service.status=false;
    this.service.step=0;
  }
  public start(){
    this.service.status=true;
  }
  public showNextBackBtn(status:boolean){
    this.isNextBackBtn=status;
  }
  ngOnInit() {

    this.service.status=true;
    if(this.OptionIntro.nextBtnText){this.option.nextBtn.text=this.OptionIntro.nextBtnText;}
    if(this.OptionIntro.nextBtnColor){this.option.nextBtn.color=this.OptionIntro.nextBtnColor;}
    if(this.OptionIntro.backBtnText){this.option.backBtn.text=this.OptionIntro.backBtnText;}
    if(this.OptionIntro.backBtncolor){this.option.backBtn.color=this.OptionIntro.backBtncolor;}
    if(this.OptionIntro.finishBtnText){this.option.finishBtn.text=this.OptionIntro.finishBtnText;}
    if(this.OptionIntro.finishBtnColor){this.option.finishBtn.color=this.OptionIntro.finishBtnColor;}

  }

}
