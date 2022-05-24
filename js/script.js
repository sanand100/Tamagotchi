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
const body = document.querySelector('body');
const mainPage = document.querySelectorAll('.main-page');
const feed = document.querySelector('#feed');

/*----- event listeners -----*/
getStarted.addEventListener('click', init);
feed.addEventListener('click', init);

/*----- functions -----*/
function init() {
	//have to hide get started modal
	startDiv.style.display = 'none';
	// body.style.backgroundImage = "url('./assets/park-background.webp')";
	body.style.backgroundColor = 'rgb(74, 245, 150)';
	mainPage.forEach(function (element) {
		element.style.visibility = 'visible';
	});

	// initialize pet's age at 0
	age = 0;
	//initialize other stats at 0 (hunger, sleepiness, boredom)
	hunger = 0;
	boredom = 0;
	sleepiness = 0;
	//Initialize timers for age, hunger, sleepiness, and boredom
}
