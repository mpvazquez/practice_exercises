## Closures
---


#### 1. Cocoon
* Create a function called `cocoon` that returns a function called `butterfly`
* When you invoke `butterfly` it should return "flap flap"

```js
var butterfly = cocoon();
butterfly() // "flap flap"
```

---

#### 2. Make sandwhich
* Create a function called `makeSandwich` that takes an ingredient as a parameter
* When you call `makeSandwich` it should return a function that takes a filling
as a parameter
* When you call on that function it should return "mmm INGREDIENT and FILLING sandwich"

```js
var sandwich = makeSandwich("peanut butter");
sandwich("jelly") // "mmm peanut butter and jelly sandwich";
```
---

#### 3. Encode
* Create a function called `encode` that stores a password and a message and returns a function called `secret` that takes a password.
* If you pass `secret` the correct password it will return the secret message
* If you make 3 incorrect guesses the function will return `Max attempts reached`

```js
var secretMessage = encode(1234, "this is a secret message");
secretMessage(111) // "Try again!"
secretMessage(111) // "Try again!"
secretMessage(111) // "Try again!"
secretMessage(111) // "Max attempts reached"
var secretMessage = encode(1234, "this is a secret message");
secretMessage(111) // "Try again!"
secretMessage(1234) // "this is a secret message"
```

## Objects
---
Create a function constructor for a `Song` object

A Song should be initialized with an object literal 
with the properties of title and lyrics

Define methods for a song on the prototype

Write a method called `wordCount`
that returns the number of words in the lyric string

```js
var title = "The Love Cats";
var lyric = "We should have each other to tea";
var composition = {title: title, lyrics: lyric};
var song = new Song(composition);
song.wordCount // 7
```

Write a method called `wordFrequency`
that returns the frequency of words in a string

```js
var composition = {
  title: "Ob-La-Di, Ob-La-Da",
  lyrics: "o bla di o bla da"
};
var song = new Song(composition)
song.wordFrequency // { o: 2, blah: 2, di: 1, da: 1 }
```

Update wordFrequency to handle punctuation

```js
var song = new Song({lyrics: "hey hey? my my!", title: "Hey Hey, My My (Into the Black)"});
song.wordFrequency // { hey: 2, my: 2 }
```

Write a method called `longestWord`
that returns the longest word in a string

```js
var lyric = "heaven knows I'm miserable now";
var title = "heaven knows I'm miserable now";
var song = new Song({title: title, lyrics: lyric});
song.longestWord // "miserable"
```

Write a method called `shortestWords`
that returns the shortest words as an array

```js
var lyric = "oh ask me why and I'll die";
var song = new Song({title: "Still Ill", lyrics: lyric});
song.shortestWords // ["oh", "me"]
```

Write a method called `longestWords`
that returns the longest words as an array

```js
var song = new Song({lyrics: "Taking out my freak tonight", title: "I Wanna Go"});
song.longestWords // ["tonight"]
```

Create an Artist object

An `artist` should have a name and a collection of songs

Write a method on the artist prototype to compose a song
`compose` takes an object literal with title and lyric properties
It should intiailize a new Song object
`songCount` should return the total number of songs by the artist

```js
var artist = new Artist("NEIL DIAMOND");
var song = {title: "Sweet Caroline", lyrics: "Hands, touchin' hands"}
artist.compose(song);
artist.songCount // 1
artist.compose({title: "America", lyrics: "They're coming to America"})
artist.songCount // 2
```


### Resources 
---
* [MDN - closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
* [Understanding closures](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
* [How to read MDN Javascript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Formatting_conventions)