import { MirrorAppPage } from './app.po';

describe('mirror-app App', function() {
  let page: MirrorAppPage;

  beforeEach(() => {
    page = new MirrorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
