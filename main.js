const moreBtn = document.querySelector('.info_up .metadata .title_btn .morebtn');
const title = document.querySelector('.info_up .metadata .title_btn .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});