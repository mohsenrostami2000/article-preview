// select items ------------------------
const shareBtn = document.getElementById('share');
const shareBtnTwo = document.querySelector('.share2')
const profile = document.querySelector('.profile');
const phoneLinks = document.querySelector('.social-medias');
const desktopLinks = document.querySelector('.desktop-links');

// Events ----------------------------------------------    

shareBtn.addEventListener('click', () => {
    if(window.innerWidth < 1000) {
        phoneLinks.classList.toggle('active');
        profile.classList.toggle('in-active');
    } else {
        desktopLinks.classList.toggle('active');
        
    }
});

shareBtnTwo.addEventListener('click', () => {
    phoneLinks.classList.toggle('active');
    profile.classList.toggle('in-active');
});

window.addEventListener('resize', e => {
    if(window.innerWidth <= 1000 && desktopLinks.classList.contains('active')) {
      desktopLinks.classList.toggle('active')
      phoneLinks.classList.toggle('active');
      profile.classList.toggle('in-active');
    } 
    else if (window.innerWidth > 1000 && phoneLinks.classList.contains('active')) {      
      desktopLinks.classList.toggle('active')
      phoneLinks.classList.toggle('active');
      profile.classList.toggle('in-active');
    }
  });