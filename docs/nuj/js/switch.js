var portrait  = 'https://nujstorysmart.com/portrait/story.html';
var landscape = 'https://nujstorysmart.com/landscape/story.html';

function resizeIframe() {
  var frame  = document.getElementById('gateway');
  var width  = frame.width;
  var height = frame.height;
  if (window.innerWidth > window.innerHeight) {
    frame.src    = landscape;
    frame.width  = Math.max(width, height);
    frame.height = Math.min(width, height);
  } else {
    frame.src = portrait;
    frame.width  = Math.min(width, height);
    frame.height = Math.max(width, height);
  }
}

window.onload   = resizeIframe;
window.onresize = resizeIframe;
