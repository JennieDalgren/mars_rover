# mars_rover
Prework for Ironhack

*Iteration 1*
1) Create an object to represent the rover that has position and direction attributes
2) Create a grid using arrays (hint: do a google search for two-dimensional arrays).
3) Write functions for the various commands
4) Try to call some of those functions and display the new position of the rover.

*Iteration 2*

We want to be able to send a series of commands to the rover and execute them in sequence.
We will send an array of character commands, which can include:

f for go forward
b for go back
r for turn right*
l for turn left*
*The rover just change its direction when we use this command.
It won't move right or left automatically. To make it go right or left, the user needs to specify
the change of direction and then the actual movement.

So we should be able to tell the rover, for example, ‘fffrfflfffbb’ and it would execute those movements
and provide us with its new position.

Furthermore, we need to make sure that the rover never goes off the grid but rather, wraps from one edge of the grid
to another (planets are spheres after all)

*Bonus*

In your 10 x 10 grid, place some obstacles that the rover cannot cross or land on.
Implement obstacle detection. The rover should execute the given commands until it reaches an obstacle,
then stop at the last possible position and report the obstacle.

*Extra hardcore super bonus*

Our rover is lonely! We need to send another one that can roam on the same grid and execute the same commands.
Make sure the rovers don’t bump into each other.
