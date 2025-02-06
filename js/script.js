const question =document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", removeButtons);

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('no-btn').offsetWidth) -85;
    var y = Math.random() * (window.innerHeight - document.getElementById('no-btn').offsetHeight) -48;
    document.getElementById('no-btn').style.left = `${x}px`;
    document.getElementById('no-btn').style.top = `${y}px`;
    
}

function removeButtons() {
    yesBtn.remove();
    noBtn.remove();
}

function nextPage() {
    window.location.href ="envelope-page/index.html"
}

