//CREATING THE MAP WITH 10 ROWS AND 10 COLS.
var grid = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];

//creating the mars rover with a position and pointing towards north.
var rover = {
  position: [0,0],
  direction: 'N'
};

//creating obastacles that the rover can encouter
var alien = [2,4];
var blackHole = [5,5];
var trump = [6,8];

//checking if the rover is in the same place as an encounter
function checkEncounter(rover) {
  if (rover.position[0]==alien[0] && rover.position[1]==alien[1]){
    document.getElementById("encounter").innerHTML = "You've met an alien! Let's have a beer :D";
  }
  else if (rover.position[0]==blackHole[0] && rover.position[1]==blackHole[1]) {
    document.getElementById("encounter").innerHTML = "Oh, here's a black hole! *silence*";//ADD: Stop all and delete the rover
  }
  else if (rover.position[0]==trump[0] && rover.position[1]==trump[1]) {
    document.getElementById("encounter").innerHTML = "You've encountered Trump. FIRE!!!!";
  }
}

//to check our position
function positionMsg(rover) {
  // function checkEncounter(rover);
  document.getElementById("msg").innerHTML = ("Rover is in position " + "[" + rover.position[0] + "," + rover.position[1] + "]" + " and is facing " + rover.direction + "." );

}

//to turn right and changing the class of the image to show the turn and new direction visually
function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction ='E';
      document.getElementById("therover").className = "east"; //to change the image class and make it rotate
      break;
    case 'E':
      rover.direction ='S';
      document.getElementById("therover").className = "south";
      break;
    case 'S':
      rover.direction ='W';
      document.getElementById("therover").className = "west";
      break;
    case 'W':
      rover.direction ='N';
      document.getElementById("therover").className = "north";
      break;
  }
}

//to turn left and changing the class of the image to show the turn and new direction visually
function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction ='W';
      document.getElementById("therover").className = "west";
      break;
    case 'W':
      rover.direction ='S';
      document.getElementById("therover").className = "south";
      break;
    case 'S':
      rover.direction ='E';
      document.getElementById("therover").className = "east";
      break;
    case 'E':
      rover.direction ='N';
      document.getElementById("therover").className = "north";
      break;
  }
}

//to move forward, depending on what direction we point in.
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      break;
    case 'E':
      rover.position[0]++;
      break;
    case 'S':
      rover.position[1]--;
      break;
    case 'W':
      rover.position[0]--;
      break;
  }
}

//to move backwards, depending on what direction we point in.
function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
        rover.position[1]--;
      break;
    case 'E':
      rover.position[0]--;
      break;
    case 'S':
      rover.position[1]++;
      break;
    case 'W':
      rover.position[0]++;
      break;
  }
}

//Check if rover goes too far in one direction and set the position to "the other side" like moving on a sphere.
//rover.position[0] is the x-value and rover.position[1] is the y-value
function checkMap(rover) {

  if (rover.position[0] >= 11) {
       rover.position[0] = 0;
  }
  else if (rover.position[0] <= -1) {
       rover.position[0] = 10;
  }

  if (rover.position[1] >= 11) {
       rover.position[1] = 0;
  }
  else if (rover.position[1] <= -1) {
       rover.position[1] = 10;
  }
}

//Get the commands from the input
function control(rover) {
  var userInput = document.getElementById("controlInput").value;
  var commands = [];
  var commandList = "";

  for (var i = 0; i < userInput.length; i++) {

    commands = userInput[i];
    commandList += "<li>" + commands + "</li>";

    console.log("Going " + commands + ". ");
    document.getElementById("test").innerHTML = "Rover moves: " + commandList;

    //Check what the commands stand for.
    if (commands === 'F' || commands === 'f') {
      goForward(rover);

    }  else if (commands  === 'B' || commands === 'b') {
          goBackward(rover);


      }  else if (commands  === 'R' || commands === 'r') {
          turnRight(rover);

      }  else if (commands  === 'L' || commands === 'l'){
          turnLeft(rover);


      } else {
          document.getElementById("msg").innerHTML = ("That's not a great command. Try again.");
      }

      checkMap(rover);
      positionMsg(rover);
      checkEncounter(rover);
  }



}
