// Funciones de reconocimiento de señas
function personsInput(handCoordinates) {
  const distance = (x1, y1, x2, y2) => {
    return Math.round(Math.hypot(x1 - x2, y1 - y2));
  };

  let persons_input = "";
  let hand_horz = false;
  let thumbs_up = false;
  let index_up = false;
  let middel_up = false;
  let ring_up = false;
  let littel_up = false;

  const hc = (i) => handCoordinates[i];

  if (
    distance(hc(0)[2], 0, hc(12)[2], 0) < distance(hc(0)[1], 0, hc(12)[1], 0)
  ) {
    hand_horz = true;
  }
  if (
    distance(hc(0)[1], hc(0)[2], hc(3)[1], hc(3)[2]) <
    distance(hc(0)[1], hc(0)[2], hc(4)[1], hc(4)[2])
  ) {
    thumbs_up = true;
  }
  if (
    distance(hc(0)[1], hc(0)[2], hc(6)[1], hc(6)[2]) <
    distance(hc(0)[1], hc(0)[2], hc(8)[1], hc(8)[2])
  ) {
    index_up = true;
  }
  if (
    distance(hc(0)[1], hc(0)[2], hc(10)[1], hc(10)[2]) <
    distance(hc(0)[1], hc(0)[2], hc(12)[1], hc(12)[2])
  ) {
    middel_up = true;
  }
  if (
    distance(hc(0)[1], hc(0)[2], hc(14)[1], hc(14)[2]) <
    distance(hc(0)[1], hc(0)[2], hc(16)[1], hc(16)[2])
  ) {
    ring_up = true;
  }
  if (
    distance(hc(0)[1], hc(0)[2], hc(18)[1], hc(18)[2]) <
    distance(hc(0)[1], hc(0)[2], hc(20)[1], hc(20)[2])
  ) {
    littel_up = true;
  }

  if (
    !index_up &&
    !middel_up &&
    !ring_up &&
    !littel_up &&
    thumbs_up &&
    !hand_horz
  ) {
    if (
      distance(hc(4)[1], hc(4)[2], hc(16)[1], hc(16)[2]) <
      distance(hc(4)[1], hc(4)[2], hc(13)[1], hc(13)[2])
    ) {
      persons_input = "O";
    } else if (
      distance(hc(4)[1], hc(4)[2], hc(18)[1], hc(18)[2]) <
      distance(hc(14)[1], hc(14)[2], hc(18)[1], hc(18)[2])
    ) {
      persons_input = "M";
    } else if (
      distance(hc(4)[1], hc(4)[2], hc(18)[1], hc(18)[2]) <
      distance(hc(10)[1], hc(10)[2], hc(18)[1], hc(18)[2])
    ) {
      persons_input = "N";
    } else if (
      distance(hc(4)[1], hc(4)[2], hc(18)[1], hc(18)[2]) <
      distance(hc(6)[1], hc(6)[2], hc(18)[1], hc(18)[2])
    ) {
      persons_input = "T";
    } else {
      persons_input = "A";
    }
  } else if (
    index_up &&
    middel_up &&
    ring_up &&
    littel_up &&
    thumbs_up &&
    !hand_horz
  ) {
    if (
      distance(hc(4)[1], hc(4)[2], hc(12)[1], hc(12)[2]) <
      distance(hc(4)[1], hc(4)[2], hc(11)[1], hc(11)[2])
    ) {
      persons_input = "C";
    } else if (
      distance(hc(4)[1], hc(4)[2], hc(17)[1], hc(17)[2]) <
      distance(hc(4)[1], hc(4)[2], hc(5)[1], hc(5)[2])
    ) {
      persons_input = "B";
    }
  } else if (
    !index_up &&
    !middel_up &&
    !ring_up &&
    !littel_up &&
    !thumbs_up &&
    !hand_horz
  ) {
    if (
      distance(hc(20)[1], hc(20)[2], hc(4)[1], hc(4)[2]) <
      distance(hc(19)[1], hc(19)[2], hc(4)[1], hc(4)[2])
    ) {
      persons_input = "E";
    } else {
      persons_input = "S";
    }
  } else if (
    !index_up &&
    middel_up &&
    ring_up &&
    littel_up &&
    thumbs_up &&
    !hand_horz
  ) {
    persons_input = "F";
  } else if (
    index_up &&
    !middel_up &&
    !ring_up &&
    !littel_up &&
    thumbs_up &&
    hand_horz
  ) {
    if (
      distance(hc(8)[1], hc(8)[2], hc(4)[1], hc(4)[2]) <
      distance(hc(6)[1], hc(6)[2], hc(4)[1], hc(4)[2])
    ) {
      persons_input = "Q";
    } else if (
      distance(hc(12)[1], hc(12)[2], hc(4)[1], hc(4)[2]) <
      distance(hc(10)[1], hc(10)[2], hc(4)[1], hc(4)[2])
    ) {
      persons_input = "P";
    } else {
      persons_input = "G";
    }
  } else if (
    index_up &&
    middel_up &&
    !ring_up &&
    !littel_up &&
    thumbs_up &&
    hand_horz
  ) {
    if (
      distance(hc(12)[1], hc(12)[2], hc(4)[1], hc(4)[2]) <
      distance(hc(10)[1], hc(10)[2], hc(4)[1], hc(4)[2])
    ) {
      persons_input = "P";
    } else {
      persons_input = "H";
    }
  } else if (
    !index_up &&
    !middel_up &&
    !ring_up &&
    littel_up &&
    !thumbs_up &&
    !hand_horz
  ) {
    persons_input = "I";
  } else if (
    !index_up &&
    !middel_up &&
    !ring_up &&
    littel_up &&
    !thumbs_up &&
    hand_horz
  ) {
    persons_input = "J";
  } else if (
    index_up &&
    middel_up &&
    !ring_up &&
    !littel_up &&
    thumbs_up &&
    !hand_horz
  ) {
    if (hc(8)[1] < hc(12)[1]) {
      persons_input = "R";
    } else if (
      distance(hc(4)[1], hc(4)[2], hc(14)[1], hc(14)[2]) <
      distance(hc(9)[1], hc(9)[2], hc(14)[1], hc(14)[2])
    ) {
      if (
        2 * distance(hc(5)[1], hc(5)[2], hc(9)[1], hc(9)[2]) <
        distance(hc(8)[1], hc(8)[2], hc(12)[1], hc(12)[2])
      ) {
        persons_input = "V";
      } else {
        persons_input = "U";
      }
    } else if (
      distance(hc(4)[1], hc(4)[2], hc(14)[1], hc(14)[2]) <
      distance(hc(5)[1], hc(5)[2], hc(14)[1], hc(14)[2])
    ) {
      persons_input = "K";
    }
  } else if (
    index_up &&
    !middel_up &&
    !ring_up &&
    !littel_up &&
    thumbs_up &&
    !hand_horz
  ) {
    if (
      distance(hc(3)[1], hc(3)[2], hc(14)[1], hc(14)[2]) <
      distance(hc(14)[1], hc(14)[2], hc(4)[1], hc(4)[2])
    ) {
      persons_input = "L";
    } else if (
      distance(hc(8)[1], hc(8)[2], hc(10)[1], hc(10)[2]) <
      distance(hc(6)[1], hc(6)[2], hc(10)[1], hc(10)[2])
    ) {
      persons_input = "X";
    } else {
      persons_input = "D";
    }
  } else if (
    index_up &&
    middel_up &&
    !ring_up &&
    !littel_up &&
    !thumbs_up &&
    !hand_horz
  ) {
    if (hc(8)[1] < hc(12)[1]) {
      persons_input = "R";
    } else if (
      2 * distance(hc(5)[1], hc(5)[2], hc(9)[1], hc(9)[2]) <
      distance(hc(8)[1], hc(8)[2], hc(12)[1], hc(12)[2])
    ) {
      persons_input = "V";
    } else {
      persons_input = "U";
    }
  } else if (
    index_up &&
    middel_up &&
    ring_up &&
    !littel_up &&
    thumbs_up &&
    !hand_horz
  ) {
    persons_input = "W";
  } else if (
    !index_up &&
    !middel_up &&
    !ring_up &&
    littel_up &&
    thumbs_up &&
    !hand_horz
  ) {
    if (
      distance(hc(3)[1], hc(3)[2], hc(18)[1], hc(18)[2]) <
      distance(hc(4)[1], hc(4)[2], hc(18)[1], hc(18)[2])
    ) {
      persons_input = "Y";
    } else {
      persons_input = "I";
    }
  }

  //let devElement = Document.getElementById("text");
  //devElement.setContentText("persons_input");

  return persons_input;
}

function drawFrame(ctx, handCoordinates, string, videoWidth, videoHeight) {
  const xMax = (hcArr) => Math.max(...hcArr.map((c) => c[1]));
  const yMax = (hcArr) => Math.max(...hcArr.map((c) => c[2]));
  const xMin = (hcArr) => Math.min(...hcArr.map((c) => c[1]));
  const yMin = (hcArr) => Math.min(...hcArr.map((c) => c[2]));

  const x_min = xMin(handCoordinates) - 7;
  const x_max = xMax(handCoordinates) + 7;
  const y_min = yMin(handCoordinates) - 7;
  const y_max = yMax(handCoordinates) + 7;

  // Recuadro que contiene la mano
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#0066ff";
  ctx.strokeRect(x_min, y_min, x_max - x_min, y_max - y_min);

  // Recuadro para la letra
  const frameTop = y_min + 3;
  ctx.fillStyle = "#0066ff";
  ctx.fillRect(x_min, frameTop, x_max - x_min, 25);

  // Texto de la letra
  ctx.fillStyle = "white";
  ctx.font = "bold 18px Arial";
  ctx.fillText(string, x_min + 8, frameTop + 18);
}

// Inicialización
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const statusDiv = document.getElementById("status");

// Variables para acumular letras
let lastLetter = "";
let timeoutId = null;
let letterStartTime = null;
let accumulatedText = "";

// Configurar MediaPipe Hands
const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  },
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});

hands.onResults(onResults);

function onResults(results) {
  // Ajustar tamaño del canvas
  canvas.width = results.image.width;
  canvas.height = results.image.height;

  // Limpiar y dibujar video con efecto espejo
  ctx.save();
  ctx.scale(-1, 1);
  ctx.translate(-canvas.width, 0);
  ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
  ctx.restore();

  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    statusDiv.textContent = "✅ Mano detectada";
    statusDiv.style.background = "#1a4d1a";

    const landmarks = results.multiHandLandmarks[0];
    const handCoords = landmarks.map((lm, i) => [
      i,
      Math.round((1 - lm.x) * canvas.width), // Invertir X para espejo
      Math.round(lm.y * canvas.height),
    ]);

    const letra = personsInput(handCoords);
    const editor = document.getElementById("editor");

    if (letra != lastLetter) {
      lastLetter = letra;
      clearTimeout(timeoutId);
      let textoActual = editor.value.toUpperCase();

      timeoutId = setTimeout(() => {
        textDiv.textContent = textoActual;
        textDiv.textContent += letra;
        mostrarImagenLetra(letra);
        editor.value += letra;
      }, 1200);
    }
    drawFrame(ctx, handCoords, letra, canvas.width, canvas.height);

    // Dibujar puntos de landmarks
    ctx.fillStyle = "#00ff00";
    handCoords.forEach((coord) => {
      ctx.beginPath();
      ctx.arc(coord[1], coord[2], 3, 0, 2 * Math.PI);
      ctx.fill();
    });
  } else {
    statusDiv.textContent = "👋 Muestra tu mano frente a la cámara";
    statusDiv.style.background = "#333";
  }
}

// Iniciar cámara con MediaPipe Camera
const camera = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 640,
  height: 480,
});

camera
  .start()
  .then(() => {
    statusDiv.textContent = "📹 Cámara iniciada - Muestra tu mano";
  })
  .catch((err) => {
    statusDiv.textContent = "❌ Error: " + err.message;
    statusDiv.style.background = "#4d1a1a";
  });
