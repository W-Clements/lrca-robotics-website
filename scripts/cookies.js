const cookiesBox = document.querySelector(`.cookies-box`);
const acceptBtn = document.querySelector(`.accept`);
const declineBtn = document.querySelector(`.decline`);

let cookies_accepted = false;
// const storeCookies = function() {
//
// }

const accept = function() {
    console.log(`ACCEPTED`);
    cookiesBox.classList.add(`hidden`);
    cookies_accepted = true;
    // storeCookies();
}
const decline = function() {
    console.log(`DECLINED`);
    cookiesBox.classList.add(`hidden`);
}

setTimeout(() => cookiesBox.classList.remove(`hidden`), 15000)

acceptBtn.addEventListener(`click`, accept);
declineBtn.addEventListener(`click`, decline);