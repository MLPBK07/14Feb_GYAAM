// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres mi sueño hecho realidad.", time: 15 },
  { text: "Desde que te conocí, todo tiene más sentido.", time: 17 },
  { text: "Eres la razón por la que sonrío cada día.", time: 19 },
  { text: "Amarte es el mejor regalo de mi vida.", time: 21 },
  { text: "Eres mi hogar en cualquier lugar del mundo.", time: 23 },
  { text: "Si el amor tuviera un rostro, sería el tuyo.", time: 25 },
  { text: "Contigo, cada instante se vuelve eterno.", time: 27 },
  { text: "Eres la melodía que da ritmo a mi corazón.", time: 29 },
  { text: "No necesito más, solo a ti.", time: 31 },
  { text: "Amar es fácil cuando se trata de ti.", time: 33 },
  { text: "Eres mi refugio y mi fortaleza.", time: 35 },
  { text: "Cada latido de mi corazón dice tu nombre.", time: 37 },
  { text: "No hay distancia que nos pueda separar.", time: 39 },
  { text: "Eres el sol que ilumina mis días.", time: 41 },
  { text: "Tu amor es mi mayor bendición.", time: 43 },
  { text: "Cada beso tuyo es un viaje al paraíso.", time: 45 },
  { text: "Amarte es la mejor decisión que he tomado.", time: 47 },
  { text: "Tu amor me hace mejor persona.", time: 49 },
  { text: "No hay mejor lugar que estar a tu lado.", time: 51 },
  { text: "Eres el sueño del que nunca quiero despertar.", time: 53 },
  { text: "No hay palabras suficientes para describir lo que siento por ti.", time: 55 },
  { text: "Tu risa es la música que alegra mi alma.", time: 57 },
  { text: "Eres mi historia favorita.", time: 59 },
  { text: "No hay día que no agradezca por tenerte.", time: 61 },
  { text: "Eres la paz en mi tormenta.", time: 63 },
  { text: "Desde que llegaste, mi vida es más hermosa.", time: 65 },
  { text: "Tu amor es mi mayor inspiración.", time: 67 },
  { text: "No quiero un final feliz, te quiero a ti para siempre.", time: 69 },
  { text: "Eres mi primer pensamiento al despertar.", time: 71 },
  { text: "Eres mi destino favorito.", time: 73 },
  { text: "Amarte es un viaje sin regreso al paraíso.", time: 75 },
  { text: "Cada día a tu lado es un milagro.", time: 77 },
  { text: "Eres mi confidente, mi amor y mi mejor amigo.", time: 79 },
  { text: "Nunca imaginé que amar a alguien fuera tan hermoso.", time: 81 },
  { text: "Si tuviera que elegir entre todo y tú, siempre serías mi elección.", time: 83 },
  { text: "Eres la definición perfecta de amor.", time: 85 },
  { text: "Tu amor me llena de alegría y esperanza.", time: 87 },
  { text: "Si el amor es un idioma, tú eres mi dialecto favorito.", time: 89 },
  { text: "Gracias por existir y darme tanto amor.", time: 91 },
  { text: "Eres la luz en mis días más oscuros.", time: 93 },
  { text: "No necesito un cuento de hadas, porque tengo nuestra historia.", time: 95 },
  { text: "Cada beso tuyo es una chispa en mi corazón.", time: 97 },
  { text: "No hay nada más valioso que nuestro amor.", time: 99 },
  { text: "El tiempo a tu lado siempre es un instante de felicidad.", time: 101 },
  { text: "Eres la pieza que completó mi vida.", time: 103 },
  { text: "Tu amor es la razón de mi felicidad.", time: 105 },
  { text: "Amo cada detalle de ti.", time: 107 },
  { text: "Eres mi persona favorita en el mundo.", time: 109 },
  { text: "Nuestro amor es eterno.", time: 111 },
  { text: "Desde que te conocí, mi corazón solo late por ti.", time: 113 },
  { text: "Amarte es el mejor regalo que me ha dado la vida.", time: 115 },
  { text: "Tú y yo somos la mejor historia de amor.", time: 117 },
  { text: "Eres el sueño que nunca quiero dejar de vivir.", time: 119 },
  { text: "Cada instante a tu lado es un tesoro.", time: 121 },
  { text: "Tú eres mi felicidad.", time: 123 },
  { text: "Eres el poema más hermoso que he leído.", time: 125 },
  { text: "Tu amor es mi refugio y mi fortaleza.", time: 127 },
  { text: "Gracias por enseñarme lo que es el amor verdadero.", time: 129 },
  { text: "Te amo más de lo que las palabras pueden expresar.", time: 131 },
  { text: "Cada segundo contigo es un regalo.", time: 133 },
  { text: "Eres mi vida, mi amor, mi todo.", time: 135 },
  { text: "A tu lado, cada día es especial.", time: 137 },
  { text: "Eres mi paz en medio del caos.", time: 139 },
  { text: "Tenerte es mi mayor fortuna.", time: 141 },
  { text: "Nuestro amor es lo más hermoso que tengo.", time: 143 },
  { text: "Amo cada parte de ti.", time: 145 },
  { text: "Eres mi más dulce inspiración.", time: 147 },
  { text: "Sin ti, mi mundo no sería el mismo.", time: 149 },
  { text: "Eres mi razón para seguir adelante.", time: 151 },
  { text: "Contigo aprendí el verdadero significado del amor.", time: 153 },
  { text: "Eres el latido de mi corazón.", time: 155 },
  { text: "Te elijo hoy y siempre.", time: 157 },
  { text: "Cada instante contigo es un momento mágico.", time: 159 },
  { text: "No hay amor más puro que el nuestro.", time: 161 },
  { text: "Eres la persona que siempre soñé.", time: 163 },
  { text: "Tenerte es mi mayor bendición.", time: 165 },
  { text: "Eres mi universo en un solo ser.", time: 167 },
  { text: "Te amo más allá del tiempo y el espacio.", time: 169 },
  { text: "Eres mi eterno amor.", time: 171 },
  { text: "Cada latido de mi corazón es por ti.", time: 173 },
  { text: "Nuestro amor es infinito.", time: 175 },
  { text: "Eres la mejor historia que contaré siempre.", time: 177 },
  { text: "A tu lado, la vida es perfecta.", time: 179 },
  { text: "Eres mi mayor felicidad.", time: 181 },
  { text: "Nuestro amor no tiene límites.", time: 183 },
  { text: "Cada día a tu lado es un nuevo comienzo.", time: 185 },
  { text: "Eres mi amor eterno.", time: 187 },
  { text: "Te amo hoy, mañana y siempre.", time: 189 },
];

  



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 15000);
