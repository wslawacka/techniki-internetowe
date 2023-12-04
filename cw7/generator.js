let pytanie=prompt("Zadaj pytanie!");
let randNumber=Math.floor(Math.random()*6);
let odpowiedz;

switch (randNumber){
  case 0:
    odpowiedz="Ułoży się";
  break;
  case 1:
    odpowiedz="Może tak, może nie";
  break;
  case 2:
    odpowiedz="Raczej nie";
  break;
  case 3:
    odpowiedz="Bardzo prawdopodobne";
  break;
  case 4:
    odpowiedz="Nigdy nie wiadomo";
  break;
  case 5:
    odpowiedz="Tak";
  break;
}
document.write(`Zadano mi pytanie: ${pytanie} <br> Moja odpowiedz brzmi: ${odpowiedz}`);
console.log(randNumber);