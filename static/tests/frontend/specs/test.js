'use strict';

describe('Set formatting attributes and ensure ep_markdown displays properly', function () {
  // create a new pad before each test run
  beforeEach(function (cb) {
    helper.newPad(cb);
    this.timeout(60000);
  });

  it('Bold section is shown as **foo** when clicking Show Markdown', function (done) {
    this.timeout(60000);
    const chrome$ = helper.padChrome$;
    const inner$ = helper.padInner$;

    const $editorContents = inner$('div');

    // clear pad
    $editorContents.sendkeys('{selectall}');
    inner$('div').first().sendkeys('bold');
    inner$('div').first().sendkeys('{selectall}');
    chrome$('.buttonicon-bold').click();
    chrome$('#options-markdown').click();

    helper.waitFor(() => (inner$('div').first()[0].textContent === 'bold'));

    const hasMarkdown = inner$('body').hasClass('markdown');
    // TODO: Use a psuedo selector to ensure the value displayed to user is **bold**
    expect(hasMarkdown).to.be(true);
    done();
  });
});
