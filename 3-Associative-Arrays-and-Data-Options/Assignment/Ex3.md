# Exercise 3

Below is a dragon object with health, attack character, and attack power key/values.

```
var dragon = {
  health: 100,
  atkString: '>',
  attackPwr: 15
}
```

a. Write a function, attack, that takes an object and displays a number of attack string characters equal to its attack power. For the dragon, you would see 15 '>' characters:

```
>>>>>>>>>>>>>>>
```

b. Create a player object with a random amount of health between 80 and 100, an attack character of your choice, and a random attack power between 10 and 20. Use your attack method from part a to show that a player can also use the attack method.

c. Simulate a single round of battle. Your output might look something like:

```
The dragon attacks!

>>>>>>>>>>>>>>>

The player is struck for 15 and has 60 health remaining.

The player attacks!

******************

The dragon is struck for 18 and has 82 health remaining.
```

(Note: This is as much of the adventure game that we will make, but you could build on this idea for a final project!)

