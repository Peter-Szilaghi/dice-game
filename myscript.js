function randomNr() {
    let nr1 = Math.random() * 5 + 1
    nr1 = Math.round(nr1);
    let diceImgSrc1 = `images/dice${nr1}.png`
    document.querySelector(".img1").src = diceImgSrc1;

    let nr2 = Math.random() * 5 + 1
    nr2 = Math.round(nr2);
    let diceImgSrc2 = `images/dice${nr2}.png`
    document.querySelector(".img2").src = diceImgSrc2;

    let text = document.querySelector("h2");
    if (nr1 > nr2) {
        text.textContent = "Player 1 WIN";
    } else if ( nr1 === nr2 ) {
        text.textContent = "Draw";
    } else {
        text.textContent = "Player 2 WIN";
    }
}
