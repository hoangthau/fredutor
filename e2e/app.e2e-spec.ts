import { PredutorPage } from './app.po';

describe('predutor App', () => {
  let page: PredutorPage;

  beforeEach(() => {
    page = new PredutorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
