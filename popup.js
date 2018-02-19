$(function() {
  console.log("Add event listener for copy and paste");
  chrome.storage.sync.get(['Text'], function(items) {
    console.log(items.Text);
  });
  chrome.storage.onChanged.addListener(function(changes, namespace) {
    console.log("changed storage");
    for (key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' + 'Old value was "%s", new value is "%s".', key, namespace, storageChange.oldValue, storageChange.newValue);
    }
  });
});
