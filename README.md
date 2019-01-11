# ng6-intro-js
# Step-by-step guide and feature introduction

<h2>Step-by-step guide and feature introduction</h2>

<h2>ng6-intro-js</h2>


Material 6+

Usage :


<h3>add to app.module.ts</h3>
  <pre>
    <code>
      import {Ng6IntroJsModule} from "./ng6-intro-js";
      
      ....
      
      imports: [
        Ng6IntroJsModule
      ],
    </code>
</pre>


add to App.Component :

<code>
  
  ```html
<ng6-intro-js #ng6IntroJs></ng6-intro-js>
```
 </code>
 
 <h2>Optional : </h2>
 <code>
  
  ```html
<ng6-intro-js [OptionIntro]="{
                             nextBtnText:'',    //next btn text
                              nextBtnColor:'', //next btn color
                              backBtnText:'', //back btn text
                              backBtncolor:'', //back btn color
                              finishBtnText:'',// finish btn text
                              finishBtnColor:''//finish btn color
                             
                             }" #ng6IntroJs></ng6-intro-js>
```
 </code>
 
 
 add Step to element : 
 <code>
  <button Ng6IntroJs [step]="1" [text]="'info Btn Show Guid'">
  </code>
  
  note : start Step from 0
  

<h3>use properties : </h3>

<code>
  
  ```html
<ng6-intro-js #ng6IntroJs></ng6-intro-js>
```
 </code>
 
 start guide :
 ng6IntroJs.start();
 
 stop guide :
 ng6IntroJs.stop();
 
 set step guide :
 ng6IntroJs.setStep(number:number);
 
 set step guide and start : 
 ng6IntroJs.setStepAndStart(number:number);
 
 show or hidde Next and Back btn: 
 ng6IntroJs.showNextBackBtn(); //default true
 
 
 



