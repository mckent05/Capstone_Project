const speakerInfo = [
  {
    speakerName: 'Akinlade Tope',
    speakerImage : 'Images/mobile-header4.jpg',
    speakerEdu: 'university of lagos',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur numquam molestiae explicabo rerum natus dignissimos adipisci fugiat quae quod',
  },
  {
    speakerName: 'Akinlade Gbenga',
    speakerImage : 'Images/meri.jpg',
    speakerEdu: 'university of lagos',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur numquam molestiae explicabo rerum natus dignissimos adipisci fugiat quae quod',
  },
  {
    speakerName: 'Akinlade Ife',
    speakerImage : 'Images/mobile-header4.jpg',
    speakerEdu: 'university of lagos',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur numquam molestiae explicabo rerum natus dignissimos adipisci fugiat quae quod',
  },
  {
    speakerName: 'Akinlade Damilola',
    speakerImage : 'Images/mobile-header4.jpg',
    speakerEdu: 'university of lagos',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur numquam molestiae explicabo rerum natus dignissimos adipisci fugiat quae quod',
  },
  {
    speakerName: 'Akinlade Damilola',
    speakerImage : 'Images/mobile-header4.jpg',
    speakerEdu: 'university of lagos',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur numquam molestiae explicabo rerum natus dignissimos adipisci fugiat quae quod',
  },
  {
    speakerName: 'Akinlade Damilola',
    speakerImage : 'Images/mobile-header4.jpg',
    speakerEdu: 'university of lagos',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur numquam molestiae explicabo rerum natus dignissimos adipisci fugiat quae quod',
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