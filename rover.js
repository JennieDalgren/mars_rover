//CREATING THE MAP WITH 10 ROWS AND 10 COLS.
var grid = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];


var rover = {
  position: [0,0],
  direction: 'N'
};




function positionMsg(rover) {
  document.getElementById("pos").innerHTML = ("Rover is in position " + "[" + rover.position[0] + ", " + rover.position[1] + "]" + " and is facing " + rover.direction + " ." );
}


function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction ='E';
      document.getElementById("pos").innerHTML = "Turning Right and is now facing EAST";
      document.getElementById("therover").className = "east"; //to change the image class and make it rotate
      break;
    case 'E':
      rover.direction ='S';
      document.getElementById("pos").innerHTML = "Turning Right and is now facing SOUTH";
      document.getElementById("therover").className = "south";
      break;
    case 'S':
      rover.direction ='W';
      document.getElementById("pos").innerHTML = "Turning Right and is now facing WEST";
      document.getElementById("therover").className = "west";
      break;
    case 'W':
      rover.direction ='N';
      document.getElementById("pos").innerHTML = "Turning Right and is now facing NORTH";
      document.getElementById("therover").className = "north";
      break;
  }
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction ='W';
      document.getElementById("pos").innerHTML = "Turning Left and is now facing WEST";
      document.getElementById("therover").className = "west";
      break;
    case 'W':
      rover.direction ='S';
      document.getElementById("pos").innerHTML = "Turning Left and is now facing SOUTH";
      document.getElementById("therover").className = "south";
      break;
    case 'S':
      rover.direction ='E';
      document.getElementById("pos").innerHTML = "Turning Left and is now facing EAST";
      document.getElementById("therover").className = "east";
      break;
    case 'E':
      rover.direction ='N';
      document.getElementById("pos").innerHTML = "Turning Left and is now facing NORTH";
      document.getElementById("therover").className = "north";
      break;
  }
}


function goForward(rover) {
  switch(rover.direction) {
    case 'N':
    if (rover.position[1]>=10) {
      document.getElementById("pos").innerHTML = "Oops, you're you cant move more north.";
      rover.poisiton[1]=10;
    }
    else {
      rover.position[1]++;
    }
      break;
    case 'E':
    if (rover.position[0]>=10) {
      document.getElementById("pos").innerHTML = "Oops, you're you cant move more east.";
      rover.poisiton[0]=10;
    }
    else {
      rover.position[0]++;
    }
      break;
    case 'S':
    if (rover.position[1]<=0) {
      document.getElementById("pos").innerHTML = "Oops, you're you cant move more south.";
      rover.poisiton[1]=0;
    }
    else {
      rover.position[1]--;
    }
      break;
    case 'W':
    if (rover.position[0]<=0) {
      document.getElementById("pos").innerHTML = "Oops, you're you cant move more west.";
      rover.poisiton[0]=0;
    }
    else {
      rover.position[0]--;
    }
      break;
  }
  document.getElementById("pos").innerHTML = "New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]";
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[1]<=0) {
        document.getElementById("pos").innerHTML = "Oops, you're you cant move more south.";
        rover.poisiton[1]=0;
      }
      else {
        rover.position[1]--;
      }
      break;
    case 'E':
    if (rover.position[0]<=0) {
      document.getElementById("pos").innerHTML = "Oops, you're you cant move more west.";
      rover.poisiton[0]=0;
    }
    else {
      rover.position[0]--;
    }
      break;
    case 'S':
    if (rover.position[1]>=10) {
      document.getElementById("pos").innerHTML = "Oops, you're you cant move more north.";
      rover.poisiton[1]=10;
    }
    else {
      rover.position[1]++;
    }
      break;
    case 'W':
    if (rover.position[0]>=10) {
      document.getElementById("pos").innerHTML = "Oops, you're you cant move more east.";
      rover.poisiton[0]=10;
    }
    else {
      rover.position[0]++;
    }
      break;
  }
  document.getElementById("pos").innerHTML = "New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]";

}
