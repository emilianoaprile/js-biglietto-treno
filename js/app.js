// # Costo del biglietto del treno

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// ### chiedere all'utente il numero di chilometri
// - dichiarare una variabile chilometri
// - assegnare variabile km tramite un prompt
// - trasformare le variabili da stringhe a numeri
const chilometri = parseInt (prompt('Inserisci il numero di chilometri da percorrere:'));
// ### chiedere all'utente l'età
// - dichiarare una variabile età
// - assegnare variabile età tramite un prompt
// - trasformare le variabili da stringhe a numeri
const eta = parseInt (prompt('Inserisci la tua età:'));
console.log (chilometri, eta);
// ### calcolare il prezzo base del biglietto
// - dichiarare una variabile prezzo base
// - calcolare il prezzo base moltiplicandolo per la tariffa di 0.21
let ticketPrice = (chilometri) * (0.21);
console.log(ticketPrice);
// ### creare variabile discount 
// - dichiarare una variabile discount = 0 in modo che quando l'età è compresa fra i due valori al finalPrice verrà sottratto il valore 0
let discount = 0;
// ### calcolare entità dello sconto in base all'età
// - SE età <= 17 
// discount = prezzo base * 0,2
// - ALTRIMENTI SE età >= 65 
// discount = prezzo base * 0,4
if (eta <= 17) {
    discount = (ticketPrice) * (0.2);
} else if (eta >= 65) {
    discount = (ticketPrice) * (0.4);
} 
console.log (discount)
// ### calcolare il prezzo finale 
// - dichiarare una variabile prezzo finale
// - assegnare variabile prezzo finale con la formula prezzo base - discount
let finalPrice = ticketPrice - discount;
console.log(finalPrice);
// ### stampare il prezzo del biglietto sul browser
// - inserire nell'HTML un tag con id = "finalPrice"
// - creare una variabile finalPriceMessage combinandola con il valore della variabile finalPrice
const finalPriceMessage = `Il prezzo del tuo biglietto è: ${finalPrice.toFixed(2)} €`;
// - richiamare l'elemento del Dom con id = "finalPrice"
const finalPriceDomElement = document.getElementById('finalPrice');
// - aggiungere l'innerHTML del tag con il valore della variabile finalPrice e la stringa finalPriceMessage
finalPriceDomElement.innerHTML = finalPriceMessage;





