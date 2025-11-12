function mostrarImagenLetra(letra) {
  const imageContainer = document.getElementById("image-container");
  const imagenes = {
    A: "https://i.ibb.co/1fGdtcMq/A.jpg",
    B: "https://i.ibb.co/351mpFRR/B.jpg",
    C: "https://i.ibb.co/nqjpBkYs/C.jpg",
    D: "https://i.ibb.co/9kh5JYhq/D.jpg",
    E: "https://i.ibb.co/RkyV3Nqm/E.jpg",
    F: "https://i.ibb.co/4ZcY0yQ7/F.jpg",
    G: "https://i.ibb.co/PvbFJPgF/G.jpg",
    H: "https://i.ibb.co/zp6R0vR/H.jpg",
    I: "https://i.ibb.co/CKQCDSCJ/I.jpg",
    J: "https://i.ibb.co/5gPvC59R/J.jpg",
    K: "https://i.ibb.co/B0c17dD/K.jpg",
    L: "https://i.ibb.co/6cYKbM4g/L.jpg",
    M: "https://i.ibb.co/W4pQJ5k7/M.jpg",
    N: "https://i.ibb.co/dsKKs8RL/N.jpg",
    O: "https://i.ibb.co/Xkxnhgmv/O.jpg",
    P: "https://i.ibb.co/1tcFBNdX/P.jpg",
    Q: "https://i.ibb.co/9kgzGcrh/Q.jpg",
    R: "https://i.ibb.co/27h6ctC6/R.jpg",
    S: "https://i.ibb.co/Z1GBCMDb/S.jpg",
    T: "https://i.ibb.co/5Xt3MmRR/T.jpg",
    U: "https://i.ibb.co/Kx3MH0X5/U.jpg",
    V: "https://i.ibb.co/39TP0Vwc/V.jpg",
    W: "https://i.ibb.co/Xx98yBr1/W.jpg",
    X: "https://i.ibb.co/8LvyHT0t/X.jpg",
    Y: "https://i.ibb.co/yc3JY3PL/Y.jpg",
  };

  imageContainer.innerHTML = "";
  if (imagenes[letra.trim()]) {
    const img = document.createElement("img");
    img.src = imagenes[letra.trim()];
    img.alt = letra;
    imageContainer.appendChild(img);
  } else {
    imageContainer.textContent = "";
  }
}

// 🔹 Campo de texto editable y sincronización con imagen
const editor = document.getElementById("editor");
const textDiv = document.getElementById("text");

// Cada vez que el usuario escribe algo
editor.addEventListener("keypress", (event) => {
  const char = event.key.toUpperCase();

  // Permitir solo letras A-Y y teclas de control (borrar, flechas, etc.)
  const letrasValidas = /^[A-Y]$/;
  const teclasPermitidas = [
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Tab",
  ];

  if (!letrasValidas.test(char) && !teclasPermitidas.includes(event.key)) {
    event.preventDefault(); // Bloquea la entrada no válida
  }
});

// Cada vez que el usuario escribe o borra algo
editor.addEventListener("input", () => {
  const texto = editor.value.toUpperCase();
  const ultimaLetra = texto.slice(-1);

  // Mostrar texto en pantalla
  textDiv.textContent = texto;

  // Mostrar imagen solo si la última letra está en A-Y
  if (ultimaLetra.match(/^[A-Y]$/)) {
    mostrarImagenLetra(ultimaLetra);
  } else {
    document.getElementById("image-container").innerHTML = "";
  }
});

// Controles de texto
const clearBtn = document.getElementById("clearBtn");
const colorPicker = document.getElementById("colorPicker");
const fontSizeSlider = document.getElementById("fontSizeSlider");
const text = document.getElementById("text");
const fontSizeLabel = document.getElementById("fontSizeLabel");

clearBtn.addEventListener("click", () => {
  text.textContent = "";
  editor.value = "";
  editor.textContent = "";
});

fontSizeSlider.addEventListener("change", (e) => {
  text.style.fontSize = e.target.value + "px";
  fontSizeLabel.textContent = e.target.value + "px";
});

colorPicker.addEventListener("change", (e) => {
  text.style.color = e.target.value;
});
