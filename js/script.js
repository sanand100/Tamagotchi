console.log('helllo from js');
/*----- constants -----*/
const BABY_IMAGE = './assets/baby.webp';
const CHILD_IMAGE = './assets/child.webp';
const TEEN_IMAGE = './assets/teen.webp';
const ADULT_IMAGE = './assets/adult.webp';
const MAX_STAT_VALUE = 100;
const MAX_BABY_AGE = 5;
const MAX_CHILD_AGE = 12;
const MAX_TEEN_AGE = 19;
const AGE_INTERVAL = 5000;
const HUNGER_INTERVAL = 2000;
const SLEEP_INTERVAL = 3000;
const BOREDOM_INTERVAL = 4000;

/*----- app's state (variables) -----*/
let age;
let hunger;
let boredom;
let sleepiness;

/*----- cached element references -----*/
const getStarted = document.querySelector('.get-started-button');
const startDiv = document.querySelector('.start-game-modal');

/*----- event listeners -----*/
getStarted.addEventListener('click', init);

/*----- functions -----*/
function init() {
	//have to hide get started modal
	startDiv.style.display = 'none';
	// '.get-started-button'.click(function () {
	// 	'start-game-modal'.modal('toggle');
	// });

	age = 0;
	hunger = 0;
	boredom = 0;
	sleepiness = 0;
}
