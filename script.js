/*
- chiedere all'utente quanti km vuole percorrere e memorizza
- Chiedere l'età dell'utente e memorizza
- Calcola il prezzo del biglietto (km * 0.21)
? SE l'utente è < 18
  ° prezzoFinale = prezzoBase - (prezzoBase / 100 * 20)
ALTRIMENTI SE L'ETà è > 65
  ° prezzoFinale = prezzoBase - prezzoBase * 0.4
ALTRIMENTI
  ° prezzoFinale - prezzoBase
- formatta prezzoFinale con due decimali
- stampa a schermo prezzoFinale in forma umana
*/




let userAge = parseInt(prompt("Quanti anni hai?"))

let tripKm = parseInt(prompt("Quanti km vuoi percorrere?"));

let pricePerKM = 0.21;

let baseTicketPrice = tripKm * pricePerKM;

let finalPrice;

if(userAge < 18){
  finalPrice = baseTicketPrice - baseTicketPrice / 100 * 20;

} else if(userAge >= 65) {

  finalPrice = baseTicketPrice - baseTicketPrice * 0.4;

} else {

  finalPrice = baseTicketPrice;
}


finalPrice = finalPrice.toFixed(2);

document.writeln(`
  Ciao, devi percorrere ${tripKm} Km,
  hai ${userAge} anni,
  il tuo prezzo finale è di ${finalPrice}€
  `);



