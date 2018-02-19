var copiedText = "";
var text1;
var text2;
var text3;
var text4;
var text5;
$(function() {
  chrome.storage.sync.get(['Text1', 'Text2', 'Text3', 'Text4', 'Text5'], function(items) {
    if (!items['Text1']) {
      chrome.storage.sync.set({
        'Text1': "1"
      });
    }
    if (!items['Text2']) {
      chrome.storage.sync.set({
        'Text2': "2"
      });
    }
    if (!items['Text3']) {
      chrome.storage.sync.set({
        'Text3': "3"
      });
    }
    if (!items['Text4']) {
      chrome.storage.sync.set({
        'Text4': "4"
      });
    }
    if (!items['Text5']) {
      chrome.storage.sync.set({
        'Text5': "5"
      });
    }
    text1 = items['Text1'];
    text2 = items['Text2'];
    text3 = items['Text3'];
    text4 = items['Text4'];
    text5 = items['Text5'];
  });
  $("body").bind({
    copy: function() {
      copiedText = getSelectionText();
      saveChanges();
    },
    cut: function() {
      copiedText = getSelectionText();
      saveChanges();
    }
  });
});

function getSelectionText() {    
  var selectedText = ""    
  if (window.getSelection) {        
    selectedText = window.getSelection().toString()    
  }    
  return selectedText
}

function saveChanges() {
  // Get a value saved in a form.
  // Check that there's some code there.
  if (!copiedText) {
    console.log('Error: No value specified');
    return;
  }
  moveText(1);
  updateSlotOne();
  console.log('finished saving');
}

function moveText(num) {
  text5 = text4;
  text4 = text3;
  text3 = text2;
  text2 = text1;
  chrome.storage.sync.set({
    'Text2': text2,
    'Text3': text3,
    'Text4': text4,
    'Text5': text5
  });
}

function updateSlotOne() {
  text1 = copiedText;
  chrome.storage.sync.set({
    'Text1': copiedText,
  });
}
