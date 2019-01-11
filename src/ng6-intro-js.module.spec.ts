import { Ng6IntroJsModule } from './ng6-intro-js.module';

describe('Ng6IntroJsModule', () => {
  let ng6IntroJsModule: Ng6IntroJsModule;

  beforeEach(() => {
    ng6IntroJsModule = new Ng6IntroJsModule();
  });

  it('should create an instance', () => {
    expect(ng6IntroJsModule).toBeTruthy();
  });
});
