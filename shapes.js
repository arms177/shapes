
window.onload = function () {
  var velocity = 50;
  var reverse = false;
  var positionX = 0;
  var positionY = 300;
  var relative = document.getElementById('relative-container');
  var ballRed1 = document.getElementById('red-one');
  var ballYellow2 = document.getElementById('yellow-two');
  var ballOrange2 = document.getElementById('orange-two');
  var ballOrange3 = document.getElementById('orange-three');
  var ballBlue3 = document. getElementById('blue-three');
  var ballBlue4 = document.getElementById('blue-four');
  var ballGrey4 = document.getElementById('grey-four');
  var ballRed5 = document.getElementById('red-five');

  function changeVelocity() {
    var xMin = 0;
    var xMax = 1000;
    var yMin = 0;
    var yMax = 1000;

    if (positionX >= xMax && positionX !== xMin) {
      reverse = !reverse;
      positionX = positionX - velocity;
      relative.style.left = positionX + 'px';
      ballRed1.style.backgrounColor = 'blue';
      ballYellow2.style.backgrounColor = getRandomColor();
      ballOrange2.style.backgrounColor = getRandomColor();
      ballOrange3.style.backgrounColor = getRandomColor();
      ballBlue3.style.backgroundColor = getRandomColor();
      ballBlue4.style.backgroundColor = getRandomColor();
      ballGrey4.style.backgroundColor = getRandomColor();
      ballRed5.style.backgrounColor = getRandomColor();
    } else {
        positionX = positionX + velocity;
        relative.style.left = positionX + 'px';
        ballRed1.style.backgrounColor = getRandomColor();
        ballYellow2.style.backgrounColor = getRandomColor();
        ballOrange2.style.backgrounColor = getRandomColor();
        ballOrange3.style.backgrounColor = getRandomColor();
        ballBlue3.style.backgroundColor = getRandomColor();
        ballBlue4.style.backgroundColor = getRandomColor();
        ballRed5.style.backgrounColor = getRandomColor();
    }

    if (positionY >= yMax && positionY !== yMin) {
      reverse = !reverse;
      positionY = positionY - velocity;
      relative.style.top = positionY
    } else {
        positionY = positionY + velocity;
        relative.style.top = positionY;
    }
  }
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

    setInterval(changeVelocity, 1000);
}