# battleship

# readme-repository

1. This is the final result of the project Battleship

![battleship](https://github.com/Preslav977/readme-repository/assets/119291608/bc31d919-4497-42e2-aa73-2ac9cfbc7df3)

1.1. Ship factory

The first big objective of the project Battleship was TDD or in other words Test Driven Development.

Which means writing the test first and then the code, if the tests passes the code is good and you can move onto the next test.

At first writing the tests was tedious and i didn't know what or how to write it, because i had only few exercise for practice and even these was a video of Sandi Metz explaining what you should test or not, how to write the test and what to avoid.

But even then i have and still had some trouble writing the test, but definitely now i am feeling a bit more experienced with writing the tests than before, and Jest wasn't complicated to install only babel had to be installed, if you wanted to use EC6 import/export instead of require.

I decided to go with the factory for this project, because the previous projects where classes and is better to have a balance between using a class or factory, i mean i want to be comfortable using both, since both have advantages.

The ships objects where created with name, length, number of hits, if they are sunk, placed.

I went here with name, because i had to know if the destroyer or submarine has been sunk later, because the both objects have similar length, probably is better way of telling the difference between two objects.

The first problem here was, since this is not a class you need a getter to change the properties of the objects, otherwise you will ended up with increasing the number of hits only in the method, that was called for example hit method, and that would leave the number of hits of 0 if the object was console logged after the hit was called if that makes sense.

The first tests were simple, because i was testing for example if carrier, have name carrier, length of 5, number of hits 0, is not sunk, is not placed.

And similarly for the other objects.

The first method here was the hit, which i explained what problem i had, and it took a while to get where the mistake happen, the tests where expecting if the ship has been hit to increment number of the hits, i did go with a number here not actually using ++ postfix operator, because the number of hits vary differently for each object and you cannot expect if using ++, to know much you actually hit the ship.

Almost forgot that here i did a way of preventing if the hits, are more than the ship length, to stop counting the ships.

The second method is isSunk which calculates if the ship is sunk after number of hits, here was my first bad choice of using the name of the object to know which object has been sunk, and using === operator to know if the object has certain number of length and numberOfHits, which ended up with 5 if statements, which could have been refactored in one if statement, i eventually refactored it and whooped back to the previous solution, because the way the isSunk was written, i depended on the method when all ships are sunk.

The test where was simple also after the number of hits has been reaching, i expected to know if the ship is sunk and to be true for example if carrier has been hit 5 times it has to be sunk else it's not.

And for the Ship factory, i went with getter and setters to prevent from changing the name, the length and etc, for security purposes.

1.2. Gameboard

Now is creating the Gameboard factory, here was one crucial point of using the TDD, if the test is created and passed, you know you can more forward, since the interface is not presented until later, and you don't have to rely on using console logs to make sure everything works, from this points i learned to appreciate testing.

The first method created in this factory was the placingShip, which i had couple of problem first, i didn't had a way of checking if actually the space is empty, even before placing the ship and later, caused couple of problem like the ship length was broken it go out of the board bound and it was placed on top of another ship.

I did here couple of beginner mistakes, returning early in the for loop which, caused ship to not be fully placed, also changing the direction of the ships was tricky at first and placing them depending of the orientation.

But in the end with some help, i managed to create another method, that checks if the space is empty and only then you could place the ship.

The tests where kinda tricky also, because i didn't know at first how to piece together, how to create the object and to place and it what to test exactly, if the ship is placed with no constrains, and if it's not placed or blocking another ship depending of the orientation, and if the ship is not placed out of bounds of the board and etc.

The second method was receiveAttack, my problem wat first was figuring out how to call hit method for each object, instead of my first solution i was checking if the board reference has ships references by checking if they where equal and the result was my test catch a bug, my second attempt was checking if the carrier object for example exist and to call hit, but i didn't worked well for all objects with these if statements.

The third attempt which is somewhat successful is creating a empty string reference of the board, which after a miss i mark the spot with M, if there is a hit mark it with H, and a way of preventing hitting the same spot.

Here i learned using the board object and hit method doesn't work well, because i want also to mark the board spots with these strings.

Here i learned about spyOn, which was method on Jest for checking if the method hit as been called, that way i will know if carrier is hit or patrol boat, which will become useful in the next method (spyOn).

The third method is storing the missed attacks to render them later, i didn't test here, because the method didn't do much, only filtered the missed attacks in another array.

The problem here is the method was working for computer board and player board, but turned out to be a problem later in the game loop, because i was saving the the wrong missed attacks for players and computer, definitely code organization mistake, the solution to this problem of not knowing which board is which, was either create some kind of dependency cycle to tell the difference between the two, meaning calling like this, computerBoard.missedAttacks() or passing each board object was parameter, that way i can see the players missed attacks on the computer board and the computers missed attacks on players board, i definitely broke single responsibility rule.

The fourth method of this factory was checking if all ships are sunk so the game board, could tell which ships are sunk, and due to my poor choice of writing isSunk i had to check for the name of the object also loop one array, and using incrementing variable this method definitely could have been written better.

Also one huge problem, i didn't know which object where sunk, because i was using only one object which was shared into two references of the object, which resulted if the object is sunk into one board it will be sunk to the other also.

Also another crucial problem since i was passing an object from the Ship factory, i didn't have a way of updating the objects, since the ones i was passing where different from the ones i was placing on the board, the problem was resolved with creation of the array, this problem was huge, because while using spyOn on the tests, the method was not called and the tests was never passed.

By the way, the tests here i was expecting if ships are placed, and hit and sunk i can tell if the player or computer wins.

1.3. Player factory

Since player doesn't have a way of attacking the board, i created a method which was expecting to call another method from the board, this method was straightforward.

The test also, if i attack with human expect computer board to take a hit and vice versa.

The first method here was taking turns this turned out not to be known problem, because it was already solve from TTT and i took take same idea.

I didn't write test for this because, the only thing i did change was a variable and didn't make a lot of sense to test it.

I had some troubles with the AI the logic is pretty simple, if the same spot has been hit generate new coordinates otherwise keep attacking.

The tests here where tricky, because i haven't done a mocking until now, mocking is way of expecting to test for example if the attack was done of certain coordinates, and since the method contained Math.Random it was definitely a challenge, and using spyOn i was certain that if the AI attacks, the players board will receive the attack.

Until now i was creating the methods, now in the gameLoop which is a method, i had to call everything and to expect the game to works in the console first before moving to the interface.

It didn't take long to create the game loop, since i knew how to game works, and i did similar thing to the TicTacToe, the game starts player is attacking first, if he misses/hits something, then it's computers turn and it's either hit/miss, there was not stopping the game, because the conditions where not implemented.

The problems i had here where due to not knowing which board i missed the attacks, i explained this above, but solving the problem with mixing the missed the attack the game loop was working.

1.4. Interface

And here stars the implementation of the Interface, i had big problem with rendering the attacks, which i got back and forth with one way of rendering the attacks/misses and other way.

The first way is using the method, that creates the board and clearing the boards textContent, that allowed me to render each attack/hit took a while to understand how to prevent adding new divs, because of the two for loops but eventually this worked.

The problem is here i rendered the misses/attacks at the same time, which made my missedAttacks method useless, and i tried to make different method to render the misses, the problem was it kinda mixed them up with the attacks, even if i had good conditions which resulted giving up from my approach and went with the ones above.

The rendering of the ships was not that hard, because i was rendering the arrays content of the player, i had to use again the name property, because using the length, caused sometimes to ships being shown at the same spot, even if it's not here, and it was weird.

For the attacks it took a while to understand, how to make and pass two parameters col and row, since the TTT was only one, and i had to think how to create the board with two different attributes, i even used dataset, but it was a problem because every row was the same value, which was a problem even if the different spot was hit, i thought i was hitting the same spot.

Eventually i solved the problem with creating the board with two different for loops and setting the attributes in the second for loop.

The conditions for ending the game where not that difficult, since each board has method that checks if the all ships where sunk all, i had to do is check if the method returns true and declare the winner.

The tests was actually big, because i have to place the ships, attack them, and check if they where sunk, i had a problem here of changing the property state which caused of failing the test

Almost forgot i didn't do any testing for the DOM.

Before moving to the last point, my DOM was sort of alright i can definitely use a polishing, i reused the method that where creating the boards, but the game loop is working correctly, i had a problem of not resetting one array, that i was saving the ships, and i lost the reference of the ships references after a reset and then everything didn't work correctly.

1.5. Finish it up

The last point is, i was giving my 100% of creating a placing system for the players ships, but it didn't worked out too well, and since this was not in the assignments, not everyone agreed to help me, and that is understandable, the other ways of implementing a system was using a form, which i have to do a lot of validation or drag and drop which will take a lot of time to implement.

And in the last minute, i know i kinda rushed it, i creating method to place ships randomly, but in the future will try again to create a system for placing the ships and make the AI smart, i also created a status of the ships to know if the ships where placed and sunk.

I completed the project with mixed feelings, i am still proud of my achievement, even if it's not the prettiest thing of the world, but i definitely enjoyed when the project started to came together and i learned to like the TDD, yes it was tedious and annoying at first, because i never did a test before then coding, it took take to write the tests but now i learned to appreciating them.
