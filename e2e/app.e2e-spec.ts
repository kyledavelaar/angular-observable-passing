import { AngularZzzPage } from './app.po';

describe('angular-zzz App', () => {
  let page: AngularZzzPage;

  beforeEach(() => {
    page = new AngularZzzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
