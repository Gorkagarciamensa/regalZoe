var c = 0;
var p = 0;
var subtitle = "Click aqui per començar!!";
var title =
  "Hola, Zoe! T'he fet aquesta petita pàgina web per què segueixis uns passos per obtenir el teu regal de reis...és molt senzill ja veuràs! Lo únic que has de fer es fer click amb el mouse a les imatges de les cartes, i seguir els passos que et diuen! Estàs preparada...?";
var speed = 50;

function happyHolidays() {
  document.getElementById("title").innerHTML += title.charAt(c);
  c++;
  if (c > 269) {
    document.getElementById("subtitle").innerHTML += subtitle.charAt(p);
    p++;
  }

  setTimeout(happyHolidays, speed);
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("S'ha copiat el codi: " + copyText.value);
}
