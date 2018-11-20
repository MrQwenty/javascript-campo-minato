function getRandom(min,max) {
  return Math.floor(Math.random () * (max-min +1) +min );
}

var array_numeri = [];

for (var i = 0; i < 16; i++) {
  var nuovo_numero = getRandom(1,100);
  array_numeri.push(nuovo_numero);
}

var array_utente=[];

var numero_inserito = parseInt(prompt("inserisci un numero da 1 a 100"));

array_utente.push(numero_inserito);

for (var i = 0; i < array_utente.length; i++) {
    array_utente[i];
}

var numeroTrovato = false;

var i = 0 ;

while (!numeroTrovato && i < 84) {
  if (nuovo_numero == numero_inserito) {
    numeroTrovato = true;
    alert("game over. Punteggio :" + array_utente.length);
  }
  else {
    prompt("ok, inseriscilo ancora");
  }
  i++;
}

document.writeln(array_numeri);
