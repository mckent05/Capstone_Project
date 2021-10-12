const speakerInfo = [
  {
    speakerName: 'Akinlade Tope',
    speakerImage : 'Images/tope.png',
    speakerEdu: 'HTML, CSS, JS',
    speakerDesc: 'Life as a Micronaut has been intriguing and fun. Its been filled fun and annoying moments when i feel like iving up. Moving through the Portal has not been easy, but with persistence and hardwork i was able to progress.',
  },
  {
    speakerName: 'Meri Gogichasivili (a.k.a The genius',
    speakerImage : 'Images/meri.jpg',
    speakerEdu: 'HTML, CSS, JS',
    speakerDesc: 'Signing up for Microverse has been of one of my best decisions so far. The Program structure has been really admirable. The tools provided have been really helpful in meeting up with the strict deadlines. I love the networking that comes with being a student in Microverse',
  },
  {
    speakerName: 'Tochuckwu Okpara',
    speakerImage : 'Images/tochi.jfif',
    speakerEdu: 'HTML, CSS, freecodeCamp certified ',
    speakerDesc: 'I have had a wonderful eperience so far, first few week was so challenging.The support system provided by Microverse is second to none, my standup team and morning session team were available to help when i had blockers.',
  },
  {
    speakerName: 'Isaac Protic',
    speakerImage : 'Images/mobile-header4.jpg',
    speakerEdu: 'Python, JS, Computer Scientist',
    speakerDesc: 'The portal for me, has been fun, My morning session and stand up teams have been really helpful when i face blockers.',
  },
  {
    speakerName: 'Jeff Kayombo',
    speakerImage : 'Images/jeff.jfif',
    speakerEdu: 'computer engineer',
    speakerDesc: 'Microverse provides you with most the required materials to guide you through the portal. But i had to do a little bit more reading to meet up with the strict deadlines.Overall, it has been a wonderful experience',
  },
  {
    speakerName: 'Daniel Shadeed',
    speakerImage : 'Images/daniel.jfif',
    speakerEdu: 'HTML, CSS, JS',
    speakerDesc: 'as someone with little or no coding experience before microverse, the first weeks of the portal have been both fun and tiresome. i have enjoyed the projects i worked on, the collaborative sessions with my partners have also been eye-opening',
  },
];

const nav = document.querySelector('.social-nav');
const openNav = document.querySelector('.btn-header');
const closeNav  = document.querySelector('.close-nav');
const featureSpeakers = document.querySelector('.featured-speakers');
const showMoreSpeakers = document.querySelector('.show-more-btn');
const showLessSpeakers = document.querySelector('.show-less-btn');
const btnCont = document.querySelector('.btn-speaker-cont');
const body = document.querySelector('.body');
const backToTop = document.querySelector('.back-top');
const header = document.querySelector('.header')

const firstSpeaker = 0;
let secondSpeaker=2;

openNav.addEventListener('click', () => {
    nav.classList.add('show-nav');
});

window.addEventListener ('scroll', () => {
  const scrollY= window.pageYOffset;
  const headerHeight= header.getBoundingClientRect().height
  if ( scrollY > 70) {
    nav.classList.remove('show-nav');
  }

  if (scrollY > headerHeight) {
    backToTop.classList.add('show-back-top')
  }

  else {
    backToTop.classList.remove('show-back-top')
  }
})

closeNav.addEventListener('click', () => {
    nav.classList.remove('show-nav');
});
const loadSpeakers = (speakers) => {
  speakers = speakers.slice(firstSpeaker,secondSpeaker);
  let displaySpeakers = speakers.map((speaker) => {
    return ` <article class="speaker1">
    <div class="speaker-img-cont">
    <img src=${speaker.speakerImage} alt="speaker1">
    </div>
    <div class="speaker-content">
    <h2 class="speaker-name">${speaker.speakerName}</h2>
    <p class="speaker-edu">${speaker.speakerEdu}</p>
    <div class="underline small-under"></div>
    <p class="speaker-text">${speaker.speakerDesc}</p>
    </div>
    </article>`
});
  displaySpeakers=displaySpeakers.join('');
  featureSpeakers.innerHTML = displaySpeakers; 
}

window.addEventListener('DOMContentLoaded', function() {
    if (body.getBoundingClientRect().width > 768) {
      secondSpeaker = speakerInfo.length;
    }
    loadSpeakers(speakerInfo);   
});

showMoreSpeakers.addEventListener('click' , () => {
    secondSpeaker = secondSpeaker + 2;
    loadSpeakers(speakerInfo);
    if (secondSpeaker > speakerInfo.length -1) {
        btnCont.classList.add('hide-btn');
    };
});

showLessSpeakers.addEventListener('click', () =>{
    secondSpeaker = secondSpeaker - 2;
    loadSpeakers(speakerInfo);
    if (secondSpeaker === 2) {
        btnCont.classList.remove('hide-btn');
    };
});



