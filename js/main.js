// Select
const hand = document.querySelector('.wave');

hand.addEventListener('mouseenter', () => {
	hand.style.animationIterationCount = 'infinite';
});

hand.addEventListener('mouseleave', () => {
	hand.style.animationIterationCount = '0';
});