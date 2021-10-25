const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const track = document.querySelector('.portfolio-list');
const containerWidth = document.querySelector('.carousel-inner').offsetWidth;

next.addEventListener('click', ()=>{
    track.style.transform = 'translateX(-'+containerWidth/3+'px)';
})

prev.addEventListener('click', ()=>{
    track.style.transform = 'translateX('+0+'px)';
})
