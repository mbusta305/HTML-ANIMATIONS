var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomnRGB(){
  return Math.floor(Math.random() * 256 );
}

for (var i = 1; i<= 10; i += 1) {
  red = randomnRGB();
  green = randomnRGB();
  blue = randomnRGB();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}
document.write(html);
