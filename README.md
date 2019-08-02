# 👋 Animated Hand Wave component
> Hand wave emoji is animated by moving back and forth when user hovers mouse.

## View project
 :mag: Live version available at [nickhericks.github.io/hand-wave/](https://nickhericks.github.io/hand-wave/)

## Project details
I had the 👋 emoji on [my website](https://nickhericks.com) for about a year before I had the idea to animate it when a user hovers over it with their mouse. I thought it might be fun to add this as an easter egg for users that randomly drag their mouse over the emoji and discover it accidentally. I love finding little easter eggs like this on other sites  Also, I figured building it might be a good way for me to practice using CSS animation.

Upon researching how to make the hand wave on mouse hover, I came across [this blog post](https://jarv.is/notes/css-waving-hand-emoji/) by Jake Jarvis. Jake's version focuses on making the hand wave continuously so they are slightly different, but beyond that we kind of had the same thing in mind so the article was obviously very helpful in understanding how to achieve the desired outcome.

## Using the animated hand wave component
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

<!-- 
## Demo
<img src="https://github.com/zellwk/jsf/raw/master/images/components/modal/animate/complete.gif" width="500"> -->
