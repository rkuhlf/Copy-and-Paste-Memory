$(function() {
  for (var i = 1; i < 6; i++) {
    setSpot(i);
  }
});

function scrollDown() {
  $('html, body').animate({
    scrollTop: $("#spot1").offset().top
  }, 500);
}

function setSpot(num) {
  chrome.storage.sync.get('Text' + num, function(item) {
    $("#spot" + num).text(item["Text" + num]);
    if (num == 5) {
      scrollDown();
    }
  });
}
