/* MAIL 
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina.
*/

// Creo le variabili globali
const btnSuccess = document.querySelector(".btn.btn-primary");

// Salvo l'email inserita dall'utente

// Creo una funzione per il click sul button e controllo che l'email sia nella lista di chi può accedere e stampo il messaggio sull'esito del controllo
btnSuccess.addEventListener("click" , 
    function() {
        let userEmail = document.getElementById("email_entered").value;
        let emailInLista = false;
        const emailList = ["lombardomario01@gmail.com", "lucagenovese0@hotmail.it", "carlochiesa23@alice.it", "filippocarlona50@gmail.com"];
        for (let i = 0; i < emailList.length; i++){

            if (userEmail === emailList[i]){
                emailInLista = true;
            }
        }

        if (emailInLista === true) {
            alert("Email presente nella lista!")
        } else {
            alert("Attenzione!! non puoi accedere. L'email inserita non è presente nella lista.");
        }
    }
);