window.addEventListener("load", () => {

  setInterval(() => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let srot = seconds * 6 + 90;
    let mrot = minutes * 6 + 90;
    let hrot = hours*30+90+minutes/2;

    let srotate = `rotate(${srot}deg)`;
    let mrotate = `rotate(${mrot}deg)`;
    let hrotate = `rotate(${hrot}deg)`;

    let secEl = document.querySelector(".sec");
    let minEl = document.querySelector(".min");
    let hrsEl = document.querySelector(".hrs");
    secEl.style.transform = srotate;
    minEl.style.transform = mrotate;
    hrsEl.style.transform = hrotate;

  }, 0);
});
