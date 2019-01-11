import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ng6IntroJsService} from "./ng6-intro-js.service";
import {Ng6IntroJsDirective} from "./ng6-intro-js.directive";
import { Ng6IntroJsComponent } from './ng6-intro-js/ng6-intro-js.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng6IntroJsDirective, Ng6IntroJsComponent],
  providers:[Ng6IntroJsService],
  entryComponents:[],
  exports: [Ng6IntroJsComponent,Ng6IntroJsDirective]
})
export class Ng6IntroJsModule { }
