import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6IntroJsComponent } from './ng6-intro-js.component';

describe('Ng6IntroJsComponent', () => {
  let component: Ng6IntroJsComponent;
  let fixture: ComponentFixture<Ng6IntroJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6IntroJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6IntroJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
