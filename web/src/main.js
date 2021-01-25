const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed:800
});

// this code goes in the about page
const iframe = document.querySelector('iframe');
const music = document.querySelector('#music');
const coding = document.querySelector('#coding');

coding.addEventListener('click', ()=>{
  iframe.src = '/coding';
});

music.addEventListener('click', ()=>{
  iframe.src = '/music';
});
