import { JlbeardWwwPage } from './app.po';

describe('jlbeard-www App', () => {
  let page: JlbeardWwwPage;

  beforeEach(() => {
    page = new JlbeardWwwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
