const sadcat = document.getElementById('sad');
const happycat = document.getElementById('happy');
const noButton = document.getElementById('no');
const yesButton = document.getElementById("yes");
noButton.addEventListener('mouseenter', () => {
    const x = Math.random() * 300 - 100; // Random value between -100 and 100
    const y = Math.random() * 200 - 100;  // Random value between -50 and 50
    noButton.style.transform = `translate(${x}px, ${y}px)`;
    sadcat.hidden = false;
    happycat.hidden = true;
}); 
yesButton.addEventListener('mouseenter', () => {
    sadcat.hidden = true;
    happycat.hidden = false;
});

function heartbreaker(){
    const second = document.getElementById('second-cover');
    const first = document.getElementById('center-cover');
    first.hidden = true;
    second.hidden = false;
}

function justkidding(){
    const jk=document.getElementById('main-text');
    const ily=document.getElementById('ily');
    const hb=document.getElementById('heartbreaker');
    jk.innerHTML = "Just Kiddingggg <3";
    ily.hidden = false;
    hb.hidden = true;
}