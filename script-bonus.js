//Si richiede all'utente di selezionare il livello di difficoltà del gioco:
//difficoltà 0 = da 1 a 100; 1 = da 1 a 80; 2 = da 1 a 50;

var array_utente = [];

var livello_difficoltà = parseInt(prompt("inserisci il livello di difficoltà da 0 a 2"));

if (livello_difficoltà == 0) {

  var numero_inserito = parseInt(prompt("inserisci un numero da 1 a 100"));

  array_utente.push(numero_inserito);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var array_numeri = [];

  for (var i = 0; i < 16; i++) {
    var nuovo_numero = getRandom(1, 100);
    array_numeri.push(nuovo_numero);
  }

  for (var i = 0; i < array_utente.length; i++) {
    array_utente[i];
  }

  var numeroTrovato = false;

  var i = 0;

  while (!numeroTrovato && i < 84) {
    if (nuovo_numero == numero_inserito) {
      numeroTrovato = true;
      alert("game over. Punteggio :" + array_utente.length);
    } else {
      prompt("ok, inserisci un altro numero");
    }
    i++;
  }

  document.writeln(array_numeri);

} else if (livello_difficoltà == 1) {

  var numero_inserito = parseInt(prompt("inserisci un numero da 1 a 80"));

  array_utente.push(numero_inserito);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var array_numeri = [];

  for (var i = 0; i < 16; i++) {
    var nuovo_numero = getRandom(1, 80);
    array_numeri.push(nuovo_numero);
  }

  for (var i = 0; i < array_utente.length; i++) {
    array_utente[i];
  }

  var numeroTrovato = false;

  var i = 0;

  while (!numeroTrovato && i < 84) {
    if (nuovo_numero == numero_inserito) {
      numeroTrovato = true;
      alert("game over. Punteggio :" + array_utente.length);
    } else {
      prompt("ok, inserisci un altro numero");
    }
    i++;
  }

  document.writeln(array_numeri);

} else if (livello_difficoltà == 2) {

  var numero_inserito = parseInt(prompt("inserisci un numero da 1 a 50"));

  array_utente.push(numero_inserito);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var array_numeri = [];

  for (var i = 0; i < 16; i++) {
    var nuovo_numero = getRandom(1, 50);
    array_numeri.push(nuovo_numero);
  }

  for (var i = 0; i < array_utente.length; i++) {
    array_utente[i];
  }

  var numeroTrovato = false;

  var i = 0;

  while (!numeroTrovato && i < 84) {
    if (nuovo_numero == numero_inserito) {
      numeroTrovato = true;
      alert("game over. Punteggio :" + array_utente.length);
    } else {
      prompt("ok, inserisci un altro numero");
    }
    i++;
  }

  document.writeln(array_numeri);
}
