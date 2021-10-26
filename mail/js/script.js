/* MAIL 
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina.
*/

// Creo la lista delle email che possono accedere
const emailList = ["lombardomario01@gmail.com", "lucagenovese0@hotmail.it", "carlochiesa23@alice.it", "filippocarlona50@gmail.com"];

// Chiedo all'utente la sua email
let userEmail = prompt("Inserisci la tua email");


// Controllo che sia nella lista di chi può accedere e stampo il messaggio sull'esito del controllo
let emailInLista = false;
for (let i = 0; i < emailList.length; i++){

    if (userEmail === emailList[i]){
        emailInLista = true;
    }
}

if (emailInLista === true) {
    const contEmail = document.querySelector("div.container");
        const checkResult = document.createElement("div");
        checkResult.classList.add("result");
        checkResult.append("La tua email è presente nella lista: ", userEmail);
        contEmail.append(checkResult);
} else {
    alert("Attenzione!! non puoi accedere. L'email inserita non è presente nella lista.");
}