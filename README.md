# Costo del biglietto del treno

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### chiedere all'utente il numero di chilometri
- dichiarare una variabile chilometri
- assegnare variabile km tramite un prompt 
### chiedere all'utente l'età
- dichiarare una variabile età
- assegnare variabile età tramite un prompt 
### trasformare i chilometri e l'età da stringa a numero 
- trasformare le variabili da stringhe a numeri
### calcolare il prezzo base del biglietto
- dichiarare una variabile prezzo base
- calcolare il prezzo base moltiplicandolo per la tariffa di 0.21
### creare variabile discount 
- dichiarare una variabile discount
- non assegnare nessun valore definito perchè verrà calcolato successivamente richiamando il nome della variabile stessa
### calcolare entità dello sconto in base all'età
- SE età <= 17 
discount = prezzo base * 0,2
- ALTRIMENTI SE età >= 65 
discount = prezzo base * 0,4
- ALTRIMENTI 
discount = 0 
### calcolare il prezzo finale 
- dichiarare una variabile prezzo finale
- assegnare variabile prezzo finale con la formula prezzo base - discount
 ### stampare il prezzo del biglietto sul browser
- inserire nell'HTML un tag con id = "finalPrice"
- richiamare l'elemento del Dom con id = "finalPrice"
- aggiungere l'innerHTML del tag con il valore della variabile finalPrice




