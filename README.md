# battleship

1. This is the final result of the project Battleship.

![battleship](https://github.com/Preslav977/readme-repository/assets/119291608/bc31d919-4497-42e2-aa73-2ac9cfbc7df3)

1.1. Ship factory

The first big objective of the project Battleship was TDD, or, in other words, test-driven development.

Which means writing the test first and then the code. If the test passes, the code is good, and you can move onto the next test.

At first, writing the tests was tedious, and I didn't know what or how to write them because I had only a few exercises for practice, and even this was a video of Sandi Metz explaining what you should test or not, how to write the test, and what to avoid.

But even then, I still had some trouble writing the test, but definitely now I am feeling a bit more experienced with writing the tests than before, and Jest wasn't complicated to install; only Babel had to be installed if you wanted to use EC6 import/export instead of require.

I decided to go with the factory for this project because the previous projects were classes, and it is better to have a balance between using a class or a factory, I want to be comfortable using both since both have advantages.

The ship's objects were created with a name, length, and number of hits; if they were sunk, they were placed.

I went here with the name because I had to know if the destroyer or submarine had been sunk later. Because both objects have similar lengths, this probably is a better way of telling the difference between two objects.

The first problem here was that since this is not a class, you need a getter to change the properties of the objects; otherwise, you will end up increasing the number of hits only in the method that was called, for example, the hit method, and that would leave the number of hits at 0 if the object was console logged after the hit was called, if that makes sense.

The first tests were simple because I was testing, for example, if a carrier has a name, a length of 5, a number of hits 0, is not sunk, and is not placed.
And similarly for the other objects.

The first method here was the hit, in which I explained the problem I had, and it took a while to get where the mistake happened. The tests were expecting if the ship had been hit to increment the number of hits. I did go with a number here, not actually using the ++ postfix operator, because the number of hits varies differently for each object, and you cannot expect, if using ++, to know how much you actually hit the ship.

I almost forgot that here I did a way of preventing if the hits are more than the ship length to stop counting the ships.

The second method is isSunk, which calculates if the ship is sunk after the number of hits. Here was my first bad choice of using the name of the object to know which object has been sunk and using the === operator to know if the object has a certain number of lengths and number of hits, which ended up with five if statements, which could have been refactored into one if statement. I eventually refactored it and whooped back to the previous solution because, because of the way the isSunk was written, I depended on the method when all ships are sunk.

The test was simple, and after the number of hits has been reaching, I expected to know if the ship is sunk. To be true, for example, if a carrier has been hit five times, it has to be sunk; otherwise, it's not.

And for the ship factory, I went with getters and setters to prevent changing the name, the length, etc. for security purposes.

1.2. Gameboard

Now is creating the gameboard factory. Here is one crucial point of using the TDD: if the test is created and passed, you know you can move forward since the interface is not presented until later, and you don't have to rely on using console logs to make sure everything works. From these points, I learned to appreciate testing.

The first method created in this factory was the placingShip, which caused a couple of problems. First, I didn't have a way of checking if the space was empty, even before placing the ship, and later, a couple of problems like the ship length was broken, it went out of the board bound, and it was placed on top of another ship.

I made a couple of beginner mistakes here, returning early in the for loop, which caused the ship to not be fully placed. Also, changing the direction of the ship was tricky at first, and placing it depending on the orientation.

But in the end, with some help, I managed to create another method that checks if the space is empty, and only then could you place the ship.

The tests were kind of tricky also, because I didn't know at first how to piece together, how to create the object, and how to place it. I didn't know what to test exactly, if the ship was placed with no constraints, if it wasn't placed or blocking another ship depending on the orientation, if the ship was not placed out of bounds of the board, etc.

The second method was receiveAttack. My problem at first was figuring out how to call the hit method for each object. Instead of my first solution, I was checking if the board reference has ship references by checking if they were equal, and the result was my test catching a bug. My second attempt was checking if the carrier object, for example, existed and calling hit, but it didn't work well for all objects with these if statements.

The third attempt, which is somewhat successful, is creating an empty string reference for the board, where after a miss, I mark the spot with M; if there is a hit, I mark it with H; and a way of preventing hitting the same spot.

Here I learned that using the board object and hit method doesn't work well because I also want to mark the board spots with these strings.

Here I learned about spyOn, which was a method on Jest for checking if the method hit as it was called. That way, I will know if a carrier is hit or patrol boat is hit, which will become useful in the next method (spyOn).

The third method is storing the missed attacks to render them later; I didn't test it here because the method didn't do much and only filtered the missed attacks into another array.

The problem here is that the method was working for the computer board and player board, but it turned out to be a problem later in the game loop because I was saving the wrong missed attacks for players and computers. This was definitely a code organization mistake. The solution to this problem of not knowing which board is which was either creating some kind of dependency cycle to tell the difference between the two, meaning calling like this, computerBoard.missedAttacks(), or passing each board object as a parameter. That way, I could see the players missed attacks on the computer board and the computers missed attacks on the players board. I definitely broke the single responsibility rule.

The fourth method of this factory was checking if all ships were sunk so the game board could tell which ships were sunk, and due to my poor choice of writing isSunk, I had to check for the name of the object and loop one array. Using incrementing variables, this method definitely could have been written better.

Also, one huge problem was that I didn't know which object was sunk because I was using only one object, which was shared with two references of the object, which meant that if the object is sunk on one board, it will also be sunk on the other.

Another crucial problem since I was passing an object from the ship factory was that I didn't have a way of updating the objects since the ones I was passing were different from the ones I was placing on the board. The problem was resolved with the creation of the array. This problem was huge because while using spyOn on the tests, the method was not called and the tests were never passed.

By the way, in the tests here, I was expecting that if ships are placed and hit and sunk, I can tell if the player or computer wins.

1.3. Player factory

Since the player doesn't have a way of attacking the board, I created a method that was expecting to call another method from the board. This method was straightforward.

The test also shows that if I attack with a human, I expect the computer board to take a hit and vice versa.

The first method here was taking turns; this turned out not to be a known problem because it was already solved by TTT, and I took the same idea.

I didn't write a test for this because the only thing I changed was a variable, and it didn't make a lot of sense to test it.

I had some troubles with the AI. The logic is pretty simple: if the same spot has been hit, generate new coordinates; otherwise, keep attacking.

The tests here were tricky because I hadn't done mocking until now. Mocking is a way of expecting to test, for example, if the attack was done in certain coordinates, and since the method contained math. Random it was definitely a challenge, and using spyOn i was certain that if the AI attacks, the players board will receive the attack.

Until now, I was creating the methods. Now, in the game loop, which is a method, I had to call everything and expect the game to work on the console first before moving to the interface.

It didn't take long to create the game loop, since I knew how games work, and I did a similar thing to the TicTacToe: the game starts with the with the player attacking first; if he misses or hits something, then it's computer's turn, and it's either hit or miss. There was no stopping the game because the conditions were not implemented.

The problems I had here were due to not knowing which board I missed the attacks; I explained this above, but after solving the problem with mixing the missed attacks, the game loop was working.

1.4. Interface

And here comes the implementation of the interface. I had a big problem with rendering the attacks, which I got back and forth between one way of rendering the attacks or misses and another way.

The first way is to use the method that creates the board and clears the board text content, which allowed me to render each attack or hit. It took a while to understand how to prevent adding new divs because of the two for loops, but eventually this worked.

The problem is that here I rendered the misses and attacks at the same time, which made my missedAttacks method useless, and I tried to make a different method to render the misses. The problem was that it kind of mixed them up with the attacks, even if I had good conditions, which resulted in me giving up on my approach and going with the ones above.

The rendering of the ships was not that hard. Because I was rendering the array content of the player, I had to use the name property again because using the length sometimes caused ships to be shown at the same spot, even if they weren't here, and it was weird.

For the attacks, it took a while to understand how to make and pass two parameters, col and row, since the TTT was only one, and I had to think about how to create the board with two different attributes. I even used a dataset, but it was a problem because every row was the same value, which was a problem even if a different spot was hit. I thought I was hitting the same spot.

Eventually, I solved the problem by creating the board with two different for loops and setting the attributes in the second for loop.

The conditions for ending the game were not that difficult, since each board has a method that checks if all ships were sunk. All I had to do was check if the method returned true and declare the winner.

The tests were actually big because I had to place the ships, attack them, and check if they were sunk. I had a problem here with changing the property state, which caused me to fail the test.

I almost forgot that I didn't do any testing for the DOM.

Before moving to the last point, my DOM was sort of alright; I can definitely use polishing. I reused the method that was used to create the boards, but the game loop is working correctly. I had a problem with not resetting one array because I was saving the ships, and I lost the references to the ships after a reset, and then everything didn't work correctly.

1.5. Finish it up

The last point is that I was giving my 100% to creating a placing system for the players ships, but it didn't work out too well, and since this was not in the assignments, not everyone agreed to help me, and that is understandable. The other way of implementing a system was using a form, which I had to do a lot of validation, or drag and drop, which would take a lot of time to implement.

And in the last minute, I know I kind of rushed it. I created a method to randomly place ships, but in the future, I will try again to create a system for placing the ships and make the AI smarter. I also created a status of the ships to know if they were placed and sunk.

I completed the project with mixed feelings. I am still proud of my achievement, even if it's not the prettiest thing in the world, but I definitely enjoyed when the project started to come together and I learned to like the TDD. Yes, it was tedious and annoying at first because I had never done a test before, then coding. It took time to write the tests, but now I appreciate them.