//Recupero la parte HTML dove andrà scritto il prezzo calcolato
const yourPrice = document.getElementById('your_price')

//Chiedi il numero di km da percorrere (userKm)
const userKm = parseFloat(prompt("Quanti km vuoi percorrere?"));

//Chiedi età del passeggero (userAge)
const userAge = parseInt(prompt("Quanti anni hai?"));

// Variabile globale contenente il prezzo
let price;

if(!isNaN(userKm) && !isNaN(userAge)) {
    console.log("km e età: ", userKm, userAge);

    //Calcola il prezzo del biglietto:
    //Prezzo = 0.21€ x km
    price = 0.21 * userKm;
    console.log("prezzo senza sconti: ", price);

    //SE l'utente è minorenne (userAge < 18anni) applica uno sconto del 20%
    if(userAge < 18) {
        price -= price * 0.2;
        console.log("prezzo se minorenne: ", price);
    }

    //SE l'utente ha più di 65 anni (userAge > 65anni) applica uno sconto del 40%
    if(userAge > 65) {
        price -= price * 0.4;
        console.log("prezzo se over 65: ", price);
    }

    //Arrotonda prezzo a 2 decimali
    price = parseFloat(price.toFixed(2));
    console.log("prezzo arrotondato: ", price);

    yourPrice.innerHTML = "Il prezzo per il biglietto da te richiesto è di: " + price + "€";

} else {
    yourPrice.innerHTML = "I dati inseriti non sono corretti. Ricarica la pagina per riprovare."
}