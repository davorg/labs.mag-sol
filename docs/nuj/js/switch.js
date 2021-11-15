var portrait  = '/nuj/portrait.html';
var landscape = '/nuj/landscape.html';

function resizeIframe() {
  var frame  = document.getElementById('gateway');
  var width  = frame.width;
  var height = frame.height;
  console.log(frame);
  console.log(width + 'x' + height);
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
