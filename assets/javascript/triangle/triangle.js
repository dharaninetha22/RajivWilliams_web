var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cw = c.width =1000,
  cx = cw / 2;
var ch = c.height = 1000,
  cy = ch / 2;
var rad = (Math.PI / 180);
var phi = 0;
var frames = 0;
ctx.lineWidth = .2;
ctx.strokeStyle = "#8090D3";
var num_circles = 300;

var outer_rad = cy;
var nVert = 3;
var angle_incr = (360/nVert) * rad;

function Draw() {
  if(frames >= 7){ flag = true;}else if(frames <= 0){flag = false;}
  if(flag == false){frames += .001;}else{frames -= .001;}
  var delta = .01*Math.cos(frames*rad);
  phi += delta;
  var step = Math.abs(Math.cos(frames * rad) + delta);
  ctx.clearRect(0, 0, cw, ch);
  ctx.beginPath();
  for (var i = 0; i <= num_circles; i += step) {
    var ratio = i / num_circles;
    var angle = i * angle_incr * Math.cos(frames * rad);
    var spiral_rad = ratio * outer_rad;
	var r = spiral_rad/nVert;
	
	var x	=	cx+(spiral_rad-r)*Math.cos(phi + angle)+r*Math.cos((spiral_rad-r)/r*(phi + angle));	
    var y	=	cy+(spiral_rad-r)*Math.sin(phi + angle)-r*Math.sin((spiral_rad-r)/r*(phi + angle));
	
  //ctx.arc(x, y,1,0,2*Math.PI);
	ctx.lineTo(x, y);
  }
  ctx.stroke();
  requestId = window.requestAnimationFrame(Draw);
}

function start() {
  requestId = window.requestAnimationFrame(Draw);
  stopped = false;
}

function stopAnim() {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
  }
  stopped = true;
}

window.addEventListener("load", start(), false);

c.addEventListener("click", function() {
  (stopped == true) ? start(): stopAnim();
}, false)