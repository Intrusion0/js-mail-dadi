/* GIOCO DEI DADI
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che “cosa” ci serve?
*/

console.log("hey ciaoo eccomi, sono DADI");

// Creazione variabili globali
const playerRandom = document.querySelector("div.player");
const botRandom = document.querySelector("div.bot");
const userResult = document.querySelector("div.result");
const playerDiv = document.createElement("div");
const botDiv = document.createElement("div");
const numRandomArray = [];

// Inserisco 2 numeri randomici nell'array vuoto
for (let i = 0; i < 2; i++) {

    let randomNum = Math.floor(Math.random() * 6) + 1;
    numRandomArray.push(randomNum);
    console.log(numRandomArray);
}

// Assegno il primo numero random al player
playerDiv.append("Giocatore mumero estratto: ", numRandomArray[0]);
playerRandom.append(playerDiv);

// Assegno il secondo numero random al bot (computer)
botDiv.append("Computer mumero estratto: ", numRandomArray[1]);
botRandom.append(botDiv);

// confronto i numeri estratti
if (numRandomArray[0] > numRandomArray[1]) {
    userResult.append("Hai vinto!!");
} else if (numRandomArray[0] == numRandomArray[1]) {
    userResult.append("Pareggio!!");
}
else {
    userResult.append("Hai perso!!");
}