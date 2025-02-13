// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te conocí un día de abril, un día común", time: 16.5 },
  { text: "El día que menos lo esperaba", time: 21.5 },
  { text: "Yo no pensaba en el amor, ni lo creía", time: 26.5 },
  { text: "Y mucho menos lo buscaba", time: 31.5 },
  { text: "Y de pronto apareciste tú", time: 36.5 },
  { text: "Destrozando paredes e ideas, te volviste mi luz", time: 41.5 },
  { text: "Yo no sabía que con un beso", time: 46.5 },
  { text: "Se podría parar el tiempo y lo aprendí de ti", time: 51.5 },
  { text: "Ni que con sólo una mirada", time: 56.5 },
  { text: "Dominaras cada espacio que hay dentro de mí", time: 61.5 },
  { text: "Tampoco sabía que podía amarte tanto", time: 66.5 },
  { text: "Hasta entregarme y ser presa de tus labios", time: 71.5 },
  { text: "Descubrí que sí", time: 76.5 },
  { text: "Porque lo aprendí de ti", time: 81.5 },
  { text: "De pronto algo pasó y la pasión faltaba", time: 86.5 },
  { text: "Nuestras noches se alargaban", time: 91.5 },
  { text: "Jamás pensé sentirme sola y fría y tonta", time: 96.5 },
  { text: "Aún estando acompañada", time: 101.5 },
  { text: "Después todo se volvió monotonía", time: 106.5 },
  { text: "Luego tantas mentiras que ya ni tú te las creías", time: 111.5 },
  { text: "Yo no sabía que sin tus besos", time: 116.5 },
  { text: "Pasaría tan lento el tiempo y lo aprendí de ti", time: 121.5 },
  { text: "Y que aguantarme no llamarte", time: 126.5 },
  { text: "Tomaría toda la fuerza que hay dentro de mí", time: 131.5 },
  { text: "Tampoco sabía que podría extrañarte tanto", time: 136.5 },
  { text: "Ni desbaratarme y que se secaran mis labios", time: 141.5 },
  { text: "Descubrí que sí", time: 146.5 },
  { text: "Porque lo aprendí de ti", time: 151.5 },
  { text: "Y ahora que por fin te he logrado olvidar", time: 156.5 },
  { text: "Hoy me vienes a buscar", time: 161.5 },
  { text: "Pero es muy tarde ya", time: 166.5 },
  { text: "Me he enamorado de alguien más", time: 171.5 },
  { text: "Yo no sabía que con sus besos", time: 176.5 },
  { text: "Iba a reemplazar los tuyos, lo aprendí de ti", time: 181.5 },
  { text: "Ni que existieran otras manos", time: 186.5 },
  { text: "Que al tocarme superaran lo que antes sentí", time: 191.5 },
  { text: "Tampoco sabía que podía amarlo tanto", time: 196.5 },
  { text: "Después de tu engaño que me hizo tanto daño", time: 201.5 },
  { text: "Descubrí que sí", time: 206.5 },
  { text: "Y todo lo aprendí de ti", time: 211.5 },
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
