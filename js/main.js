



const container = document.querySelector(".container");



// Wave hand
const wave = () => {
	const hand = document.querySelector('.big-hand');


	
	const tl = new TimelineMax({});
	tl.set(hand, { transformOrigin: 'bottom center' });
	tl.from(hand, 0.5, {
		scale: 0.5,
		opacity: 0,
		ease: Back.easeOut.config(1.5)
	});
	tl.to(hand, 0.2, { rotation: 15 });
	tl.to(hand, 0.2, { rotation: -15 });
	tl.to(hand, 0.2, { rotation: 15 });
	tl.to(hand, 0.2, { rotation: -15 });
	tl.to(hand, 0.2, { rotation: 0 });
};



container.addEventListener('click', () => {
	wave();
});
