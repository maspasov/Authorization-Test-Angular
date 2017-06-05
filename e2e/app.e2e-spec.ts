import { V9imxPage } from './app.po';

describe('v9imx App', function() {
  let page: V9imxPage;

  beforeEach(() => {
    page = new V9imxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('imx works!');
  });
});
