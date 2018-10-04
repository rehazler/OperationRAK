// In the html, give the section/header/div the following id to show the clock:: 'clock'
// For example: <h1 class="text-center" id="clock"></h1>

// MAKE THE ARRAYS HERE.
// (will need at least 2: one for the titles and one for the actual description)
let arrTitles = [`HUG BUG`, `BE SPONTANEOUS!`, `COMEDIAN`, `GOOD VIBES`, `HODOR!`, `5 UP!`, `LOOKIN' GOOD!`, `SOCIAL BUTTERFLY`];
let arrActs = [`Give somebody a hug.`, `Sometimes, random acts of kindness just come to you in the moment!`, `Get somebody to laugh.`, `Write a positive comment on a website/blog/video.`, `Hold the door for someone.`, `High-five a stranger!`, `Give someone a compliment.`, `Strike up a conversation with somebody while at the store (grocery or otherwise).`];
//8 so far.
let arrTitleLess = [
    `Offer someone your pen.`,
    `Let someone go in front of you in line.`,
    `Insert coins into someone's parking meter.`,
    `Pay for someone's coffee.`,
    `Spread some encouragement online.`,
    `Learn to say "Hello" in a different language.`,
    `Do a favor without asking for anything in return.`
    `Lend a friend a favorite book/movie.`,
    `Take the time to listen to someone.`,
    `Help a child or older person cross the street.`,
    `Leave letters of encouragement on people's cars.`,
    `Hold the elevator for someone.`,
    `Pick up litter near your home.`,
    `Say "Good Morning" to someone.`,
    `Mentor someone`,
    `Mind your manners today.`,
    `Return a rogue shopping cart to its store.`,
    `Be tolerant towards others.`,
    `Smile at 10 strangers.`,
    `Let a car merge in front of you.`,
    `Make positive small talk with strangers.`,
    `Leave a generous tip.`,
    `Praise a parent for their child.`,
    `Teach someone something new.`,
    `Clean your room without being asked.`,
    `Eat with someone new at lunch.`,
    `Help someone with yardwork.`,
    `Give a smiley face picture to someone.`,
    `Help someone with their grocery bags.`,
    `Pick up litter at a nearby park.`,
    `Be grateful.`,
    `Write a positive note on a sticky and post it somewhere.`,
    `Be more positive.`,
    `Speak kindly.`,
    `Forgive someone.`,
    `Bring your co-workers or fellow students a sweet treat.`,
    `Thank a teacher.`,
    `Share your umbrella with someone on a rainy day.`
  ];// 37

// PUT THE boolean VALUE HERE (for preventing the users from spamming the "refresh" feature)
let clearToRefresh = true;

// PUT THE ARRAY REFRESHER HERE
// (need to dig up the randomizer selector from previous class or find one with internet)
function arrayRefresh (){
  //do stuff here.
  if(clearToRefresh) {
    // using arrTitleLess for now.
    let actOne = Math.floor(Math.random()*38);
    let actTwo = Math.floor(Math.random()*38);
    let actThree = Math.floor(Math.random()*38);
    let actFour = Math.floor(Math.random()*38);
    let actFive = Math.floor(Math.random()*38);
    // arrTitleLess[actOne]
    // From here, create elements with included event listeners to poplulate the space defined for these acts on the main page.
    
    //do things
    clearToRefresh = false;
  }
};

//NEEd AN EVENT LISTENER THAT listens for when all 5 buttons have been pressed and prompts the user if they want to get a new list of acts to do.

//HERE BEGINS THE CODE FOR THE COUNTDOWN CLOCK ---------------------------------
function checkTime (timeSegments) {
  if (timeSegments < 10){timeSegments= `0${timeSegments}`;};
  return timeSegments;
}; // makes our clock more normal/symmetric-looking.

function displayClock(){
  const clock = document.getElementById("clock");
  // Jacob here, I really hope this is the best way of going about it.
  setInterval(function () {
    let today = new Date();
    let hour = 24 - today.getHours();
    let min = 60 - today.getMinutes();
    let sec = 60 - today.getSeconds();
    //putting a checker to see if it's time to load up a new checklist of nice things to do.
    if( (hour === 0) && (min===0) && (sec===0) ){/* call ^^^THAT FUNCTION here, and don't stop running this function. */
      arrayRefresh();
      clearToRefresh = true;
      //also, reset the 'do_more' boolean to TRUE (note: do this inside the array refresher)
    };
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);
    clock.textContent = `${hour}:${min}:${sec}`;
  }, 1000);
};
displayClock();
//HERE ENDS THE CODE FOR THE COUNTDOWN CLOCK. ----------------------------------
