// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te conocí un día de abril, un día común", time: 17.5 },
  { text: "El día que menos lo esperaba", time: 22.5 },
  { text: "Yo no pensaba en el amor, ni lo creía", time: 27.5 },
  { text: "Y mucho menos lo buscaba", time: 32.5 },
  { text: "Y de pronto apareciste tú", time: 37.5 },
  { text: "Destrozando paredes e ideas, te volviste mi luz", time: 42.5 },
  { text: "Yo no sabía que con un beso", time: 47.5 },
  { text: "Se podría parar el tiempo y lo aprendí de ti", time: 52.5 },
  { text: "Ni que con sólo una mirada", time: 57.5 },
  { text: "Dominaras cada espacio que hay dentro de mí", time: 62.5 },
  { text: "Tampoco sabía que podía amarte tanto", time: 67.5 },
  { text: "Hasta entregarme y ser presa de tus labios", time: 72.5 },
  { text: "Descubrí que sí", time: 77.5 },
  { text: "Porque lo aprendí de ti", time: 82.5 },
  { text: "De pronto algo pasó y la pasión faltaba", time: 87.5 },
  { text: "Nuestras noches se alargaban", time: 92.5 },
  { text: "Jamás pensé sentirme sola y fría y tonta", time: 97.5 },
  { text: "Aún estando acompañada", time: 102.5 },
  { text: "Después todo se volvió monotonía", time: 107.5 },
  { text: "Luego tantas mentiras que ya ni tú te las creías", time: 112.5 },
  { text: "Yo no sabía que sin tus besos", time: 117.5 },
  { text: "Pasaría tan lento el tiempo y lo aprendí de ti", time: 122.5 },
  { text: "Y que aguantarme no llamarte", time: 127.5 },
  { text: "Tomaría toda la fuerza que hay dentro de mí", time: 132.5 },
  { text: "Tampoco sabía que podría extrañarte tanto", time: 137.5 },
  { text: "Ni desbaratarme y que se secaran mis labios", time: 142.5 },
  { text: "Descubrí que sí", time: 147.5 },
  { text: "Porque lo aprendí de ti", time: 152.5 },
  { text: "Y ahora que por fin te he logrado olvidar", time: 157.5 },
  { text: "Hoy me vienes a buscar", time: 162.5 },
  { text: "Pero es muy tarde ya", time: 167.5 },
  { text: "Me he enamorado de alguien más", time: 172.5 },
  { text: "Yo no sabía que con sus besos", time: 177.5 },
  { text: "Iba a reemplazar los tuyos, lo aprendí de ti", time: 182.5 },
  { text: "Ni que existieran otras manos", time: 187.5 },
  { text: "Que al tocarme superaran lo que antes sentí", time: 192.5 },
  { text: "Tampoco sabía que podía amarlo tanto", time: 197.5 },
  { text: "Después de tu engaño que me hizo tanto daño", time: 202.5 },
  { text: "Descubrí que sí", time: 207.5 },
  { text: "Y todo lo aprendí de ti", time: 212.5 },
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
