// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te conocí un día de abril, un día común", time: 10 },
  { text: "El día que menos lo esperaba", time: 14 },
  { text: "Yo no pensaba en el amor, ni lo creía", time: 18 },
  { text: "Y mucho menos lo buscaba", time: 22 },
  { text: "Y de pronto apareciste tú", time: 27 },
  { text: "Destrozando paredes e ideas, te volviste mi luz", time: 32 },
  { text: "Yo no sabía que con un beso", time: 38 },
  { text: "Se podría parar el tiempo y lo aprendí de ti", time: 42 },
  { text: "Ni que con sólo una mirada", time: 48 },
  { text: "Dominaras cada espacio que hay dentro de mí", time: 53 },
  { text: "Tampoco sabía que podía amarte tanto", time: 59 },
  { text: "Hasta entregarme y ser presa de tus labios", time: 64 },
  { text: "Descubrí que sí", time: 68 },
  { text: "Porque lo aprendí de ti", time: 72 },
  { text: "De pronto algo pasó y la pasión faltaba", time: 78 },
  { text: "Nuestras noches se alargaban", time: 83 },
  { text: "Jamás pensé sentirme sola y fría y tonta", time: 87 },
  { text: "Aún estando acompañada", time: 92 },
  { text: "Después todo se volvió monotonía", time: 98 },
  { text: "Luego tantas mentiras que ya ni tú te las creías", time: 103 },
  { text: "Yo no sabía que sin tus besos", time: 109 },
  { text: "Pasaría tan lento el tiempo y lo aprendí de ti", time: 114 },
  { text: "Y que aguantarme no llamarte", time: 120 },
  { text: "Tomaría toda la fuerza que hay dentro de mí", time: 125 },
  { text: "Tampoco sabía que podría extrañarte tanto", time: 132 },
  { text: "Ni desbaratarme y que se secaran mis labios", time: 137 },
  { text: "Descubrí que sí", time: 143 },
  { text: "Porque lo aprendí de ti", time: 147 },
  { text: "Y ahora que por fin te he logrado olvidar", time: 152 },
  { text: "Hoy me vienes a buscar", time: 157 },
  { text: "Pero es muy tarde ya", time: 162 },
  { text: "Me he enamorado de alguien más", time: 168 },
  { text: "Yo no sabía que con sus besos", time: 173 },
  { text: "Iba a reemplazar los tuyos, lo aprendí de ti", time: 178 },
  { text: "Ni que existieran otras manos", time: 184 },
  { text: "Que al tocarme superaran lo que antes sentí", time: 189 },
  { text: "Tampoco sabía que podía amarlo tanto", time: 194 },
  { text: "Después de tu engaño que me hizo tanto daño", time: 199 },
  { text: "Descubrí que sí", time: 204 },
  { text: "Y todo lo aprendí de ti", time: 208 },
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
setTimeout(ocultarTitulo, 216000);