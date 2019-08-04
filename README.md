# 👋 Animated hand wave emoji on mouse hover
Hand wave emoji is animated by moving back and forth when a user hovers their mouse over it.

## View project
 :mag: View live version here: [nickhericks.github.io/hand-wave-animation/](https://nickhericks.github.io/hand-wave-animation/)

## Project details
I had the 👋 emoji on [my website](https://nickhericks.com) for about a year before I had the idea to animate it when a user hovers over it with their mouse. I thought it might be a fun surprise for users to discover. I know for me, finding easter eggs like this on other websites brings me a small bit of joy so the idea was that this might do the same. :)

## Using the animated hand wave emoji
1. Add the span tag to your HTML file: `<span class="wave">👋</span>`

2. Add the following CSS to your project's CSS file:
```CSS
.wave {
  animation-name: wave-animation;  /* Name of @keyframes element below */
  animation-duration: .75s;  /* Wave speed */
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-play-state: paused;
  transform-origin: 70% 70%;  /* Pivot from bottom-left palm */
  display: inline-block;
  font-size: 8rem;
}

.wave:hover {
  animation-play-state: running; /* Play animation on mouse hover */
}

@keyframes wave-animation {
  0% { transform: rotate( 0deg ) }
  25% { transform: rotate( -10deg ) }
  75% { transform: rotate( 12deg ) }
  100% { transform: rotate( 0deg ) }
}
```

## Acknowledgements
Big thanks to Jake Jarvis for [this blog post](https://jarv.is/notes/css-waving-hand-emoji/)
which helped me to better understand how to use CSS animations. :raised_hands: