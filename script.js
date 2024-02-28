window.addEventListener('scroll', () => {
    let y = window.scrollY

    let mainBG = document.querySelector('.mainBG');
    mainBG.style.transform = `translateY(${y / 2}px)`;

    let cap = Math.min(y, 1920)
    let slideBG = document.querySelector('.slideText');
    slideBG.style.transform = `translateX(${-cap}px)`;
});
