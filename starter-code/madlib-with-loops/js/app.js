var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var fav =[];


function getRandom () {
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    var _text = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
   document.getElementById("xForY").innerHTML= _text;
  }

  function saveStartup () {
    fav.push(document.getElementById("xForY").innerHTML);
    }

    function showfav () {
      document.getElementById("favorites").innerHTML= fav.join("<br />");
    }

  document.getElementById("create").onclick = getRandom;
  document.getElementById("save").onclick = saveStartup;
  document.getElementById("print").onclick = showfav;

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
