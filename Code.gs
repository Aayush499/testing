function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Quick Insert')
    .addItem('Insert Greeting', 'insertGreeting')
    .addItem('Insert Signature', 'insertSignature')
    .addToUi();
}

function insertGreeting() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  body.appendParagraph('Howdy');
}

function insertSignature() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  body.appendParagraph('Best Regards,\nAayush Bhandari\n335007134');
}
