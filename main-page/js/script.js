//LOGIKA HLAVNÍ STRÁNKY//

// Funkce pro zpracování kliknutí na tlačítko
function vybratMoznost(moznost) {
    var questionText = document.getElementById('question');

    if (moznost === 'ano') {
        flashRainbowColors(function () {
            window.location.href = "../envelope-page/index.html";
        });
    } else if (moznost === 'ne') {

        questionText.innerText = '⚠️HUH ⁉️ 🤨🤨🤨⚠️';
        questionText.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
        questionText.style.color = "red";
        questionText.style.fontSize = "3rem";

        var yesBtn = document.getElementById('yes-btn');
        var noBtn = document.getElementById('no-btn');
        var obrazek = document.querySelector('.obrazek');

        noBtn.innerText = '👹👹👹';
        obrazek.src = "../img/smutna_zluta_koule.webp";
        

        var currentYesScale = yesBtn.style.transform.match(/scale\(([^)]+)\)/);
        var yesScaleValue = currentYesScale ? parseFloat(currentYesScale[1]) : 1;
        var newYesScale = yesScaleValue * 1.2;
        yesBtn.style.transform = `scale(${newYesScale})`;

        var currentNoScale = noBtn.style.transform.match(/scale\(([^)]+)\)/);
        var noScaleValue = currentNoScale ? parseFloat(currentNoScale[1]) : 1;
        var newNoScale = noScaleValue * 0.8;
        noBtn.style.transform = `scale(${newNoScale})`;

        yesBtn.style.transition = "transform 0.3s ease-in-out";
        noBtn.style.transition = "transform 0.3s ease-in-out";
    } else {
        alert('Neplatná možnost!');
    }
}

// Funkce pro blikání duhových barev a následné provedení callback funkce
function flashRainbowColors(callback) {
    document.getElementById('question').style.display = 'none';
    var body = document.body;
    var obrazek = document.querySelector('.obrazek');

    obrazek.src = "../img/vesely_kotatko.gif";

    console.log("Přidávám efekt duhového blikání...");
    body.classList.add("rainbow-effect");

    setTimeout(function () {
        console.log("Odstraňuji efekt duhového blikání...");
        body.classList.remove("rainbow-effect");

        if (callback) {
            callback();
        }
    }, 2000);
}

function nextPage() {
    window.location.href = "../envelope-page/index.html"
}

