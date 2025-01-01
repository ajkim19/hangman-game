# Hangman

A simple game from a simple man

## Background

I'm currently taking a web development bootcamp and about two months in. I got bored and decided to build a hangman game for practice and to pass the time. So far, we've gone over some beginner-level HTML, CSS, Javascript, TypeScript, and jQuery. I plan to add more features and complexity the more I learn. I might just overkill on the complexity for the purpose of increasing my proficiency.

## Under the Hood

For this project, in it's initial stages, I've utilized:

- HTML5
- CSS
- jQuery

Like with most web applications, HTML was used as for the underlying structure, CSS added some flare (if you can consider it so), and jQuery handled the user interactions and "animation."

## How to Install (For Beginners Like Me)

1. Clone the repository
2. Open the HTML file in your local directory

Yeah. That's it. Sometimes people need the simple answers spelled out (I know I did in the beginning). Though I might use TypeScript later on down the road.

## How to Use

- Type a single letter into the prompt.
- Click the button to submit your guess.
- You're allowed 7 incorrect guesses before it's Game Over (Objective Unachieved, whomp whomp, etc.).
- Regardless of the outcome, you will be prompted to either play again, or rage quit.

## Notable Features (I found them significant at least)

### Hangman is Your Bathroom Buddy

The hangman used to be a stick figure using characters from the English QWERTY keyboard, but I updated it. 

<p align="left">
  <img src="images/hangman-stick.png" alt="hangman figure">
</p>
*I was pretty proud of myself with this*

Now it's the image that guys see when they go to use most public restrooms.

<p align="left">
  <img src="images/hangman-gallows-image.png" alt="hangman figure">
</p>

Yeah, that still might be a little controversial. Oh well. I honestly don't know how to upgrade from this one because what I mentioned previously still stands: 

"Okay. So, about 75% of the way through [creating the stick figure hangman], as I started thinking about how I should try to modify my program in the near future. I then thought about how I might spruce up the animation and add [more realistic] images. I realized, no... So, this hangman game might turn into a complete-the-picture-of-this-cute-puppy-that's-not-hanging-by-a-noose-by-solving-the-word game."

Moving on :dog:

### Returned Focus

At the start of the game, the cursor (and/or caret?) in input field is active and waiting for the first letter. In addition, every time after entering a letter, the prompt will reset, immediately prepared for the next letter submission. This was key to me because it annoyed me like no other when I had to keep moving the cursor back to the input box after every button click. So, this:
"**move**-**click**-type-**move**-**click**-**move**-**click**-type-**move**-**click**" 

became this:

"type-**click**-type-**click**."

<p align="left">
  <img src="images/hangman-prompt.png" alt="hangman prompt">
</p>

Seriously, that cursor line felt like my messiah when I implemented it. I don't know. Maybe it's just me. I'll get over it. Whatever. Stop looking at me.

## References

- [**MDN Web Docs**](https://developer.mozilla.org/en-US/)
- [**W3Schools**](https://www.w3schools.com/)
