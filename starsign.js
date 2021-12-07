// starsign.js

//import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';
//import ( require('secret-message.js'));
// Generates random messages about starsigns and Zodiac events

function generateRandomNumber(len) {
  return (Math.floor(Math.random() * len));
}

// Create lists of random star dates and star signs
const data = {
  dates: [
    'Aries March 21-April 19',
    'Taurus Dates April 20-May 20',
    'June 21-July 22',
    'July 23-August 22',
    'August 23-September 22',
    'September 23-October 22',
    'October 23-November 21',
    'November 22-December 21',
    'December 21-January 20',
    'January 21-February 18',
    'February 19-March 21',
  ],
  signs: [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagitarious',
    'Capricorn',
    'Aquarius',
  ],
  zodiacMessages: [
    'Zodiac signs are not about what you know, zodiac signs tell you what is written in the dazzling constellations of the stars',
    'Your sun zodiac sign relates to your sense of self, your confidence, and your identity',
    'The sun sign is only the beginning of a rich and complex journey that involves the rest of the planets',
    'Some astrologers consider the Ophiuchus constellation a thirteenth sign',
    'Aphrodite. This enchanting Goddess of Love possesses many of the traits associated with the Libra zodiac sign',
    'When astrologers realized that Earth was moving, this morphed into an Earth-centric practice',
    'Earth-centric practice centered on the points that mark our four seasons of spring, summer, autumn, and winter',
    'Every year, the sun enters Aries on the same day as the Spring Equinox',
    'Fiery Mars makes Aries full of light and energy',
    'Taurus suddenly mellows the vibes for rest and relaxation',
    'Cancer - Artemis, The Greek goddess Artemis, ruler of Cancer, is also sometimes known as the Moon Goddess.',
    'Starsigns are not about what you are but who you are written in the stars',
    'Twins is ruled by intellectual cosmic messenger Mercury, the fastest-moving planet in the solar system',
    'Ancient Greeks were fascinated by the stars and constellations in the night sky.',
    'The Ancient Greeks great meaning to the cosmos by aligning each sign of the zodiac with a god or goddess.',
  ],
};

// Generate and store randomized data
let randData = [];
for (let content in data) {
  randData.push(data[content][generateRandomNumber(data[content].length)]);
}

const genDates = randData[0];
const genSigns = randData[1];
const genZodiacMessages = randData[2];

// Determine if genGenre starts with vowel and sets proper indefinite article
let article = "";
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
if (vowels.includes(genDates[0].toLowerCase())) {
  article = "An";
} else {
  article = "Starsign";
}

// Log secret prompt for zociac starsign messagesToLog

console.log(`zodiacMessages Prompt: ${article} ${genDates} set in ${genSigns}: inspirational message: ${genZodiacMessages}.`);

