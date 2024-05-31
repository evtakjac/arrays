# Questions

1. What is a drawback of using parallel arrays vs other types of related data structures? What is something you need to be mindful of when using parallel arrays?

2. In the following, change one or both of the last 2 lines so that the data is once again related.
```
var cities = ['Edmonton', 'Calgary', 'Vancouver']
var popByThousands = [1469, 1543, 2737]

cities.splice(2, 0, 'Winnipeg');
cities.unshift(850);
```

3. Use the array below to state how you could do the following:

 a. Output 'Charmander'

 b. Change 'grass' to 'poison'

 c. Decrement (decrease) 314 by 10

 d. Push a new entry with values: 'Caterpie', 'bug', 195

 e. Write a loop to output all pokemon. A single line should look like:  
   > Name: Bulbasaur , Element: poison , Total Stats: 318

>```
let pokemon = [ ['Bulbasaur', 'grass', 318], ['Charmander', 'fire', 309], ['Squirtle', 'water', 314] ];
```

4. Take the following data and create an object out of it.
 > Abdi's dog's breed is Golden Retriever. It weights 30 kg and has Dark Golden color for its fur.

 > An account holder's first name is Tifa. Her last name is Lockhart. Her account number is 2157 and her balance is 537 dollars.

5. What statement would perform the following:

  a. Output the make of the car.
  
  b. Change the color of the car to 'red'

  c. Increase the weight of the car by 50 kg.

  d. Add a new key/value.  The year of the car is 2012.


```
var car = {
  make : 'Hyundai',
  model : 'Tucson',
  weight : 950,
  color : 'black'
}
```


6. An array called instagramPosts contains 100 social media objects. Each object keys called:
   - image
   - date
   - numLikes

  a. What line of code would you use to display the date on the 35th post?

  b. Write a for loop that prints the image files for all posts.

  c. Write a loop that counts and then displays the number of posts that have over 50 likes.

7. Take the following parallel array data structure, and
  a. Turn it into a multidimensional array.
  b. Turn it into an array of objects.

> title = ['Avatar', 'Avengers: Endgame', 'Titanic', 'Star Wars: The Force Awakens', 'Avengers: Infinity War'];

> grossInMillions = [2.847, 2.797, 2.187, 2.068, 2.048];

> yearReleased = [2009, 2019, 1997, 2015, 2018];