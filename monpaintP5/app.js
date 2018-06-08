var http = require('http');

httpServer = http.createServer(function (req, res) {
    res.writeHead(200);
    console.log('un utilisateur a afficher la page');
});
var server = http.createServer('index.html');




function setup() {
  createCanvas(800, 400);
  background(252,252,252);

}

function draw() {
  stroke(90);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

httpServer.listen(1337);