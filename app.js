function scrollAppear(){
    var intro = document.querySelector('.intro-text');
    // var introPosition = introText.getBoundingClientRect().top;
    intro.classList.add('intro-1');

}

function Animation(){
    var intro = document.querySelector('.v');
    // var introPosition = introText.getBoundingClientRect().top;
    intro.classList.add('v-start');

}


window.addEventListener('load', Animation);
window.addEventListener('load', scrollAppear);