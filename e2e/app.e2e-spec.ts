import { PremierLeaguePage } from './app.po';

describe('premier-league App', () => {
  let page: PremierLeaguePage;

  beforeEach(() => {
    page = new PremierLeaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pl works!');
  });
});
