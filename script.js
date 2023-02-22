/*
chiedere all'utente quanti km vuole percorrere e memorizza
Chiedere l'età dell'utente e memorizza
Calcola il prezzo del biglietto: somma € 0.21 ai km che vuole percorrere l'utente
SE l'utente è minorenne applica lo sconto del 20%
SE l'utente è over 65 anni applica lo sconto del 40%
*/




let age = prompt("Quanti anni hai?")
  console.log(age);

let percorrenza = parseInt(prompt ("Quanti km vuoi percorrere?"));
  console.log(percorrenza);

let prezzoAlKilometro = 0.21;

let prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
console.log(prezzoBigliettoSenzaSconto);


let offerta = "Tariffa Standard"

if (age == "minorenne") {
    ((prezzoBigliettoSenzaSconto / 100) * 80);
    
   } else if (age == "over65") {
    ((prezzoBigliettoSenzaSconto / 100) * 60);
    
   } else {
    (prezzoBigliettoSenzaSconto);
   }
