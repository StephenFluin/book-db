import { GddPage } from './app.po';

describe('gdd App', function() {
  let page: GddPage;

  beforeEach(() => {
    page = new GddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
