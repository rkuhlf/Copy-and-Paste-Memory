var copiedText = "";
$(function() {
  $("body").bind({
    copy: function() {
      copiedText = getSelectionText();
      saveChanges();
    },
    paste: function() {
      console.log(window.clipboardData.getData('Text'));
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
  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({
    'Text': copiedText
  }, function() {
    // Notify that we saved.
    console.log('Settings saved');
  });
  console.log(copiedText);
}
chrome.storage.onChanged.addListener(function(changes, namespace) {
  console.log("changed storage");
  for (key in changes) {
    var storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' + 'Old value was "%s", new value is "%s".', key, namespace, storageChange.oldValue, storageChange.newValue);
  }
});
