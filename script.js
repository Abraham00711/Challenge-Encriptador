var textArea = document.querySelector(".text-area");
var mensaje = document.querySelector(".mensaje");
var copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto() {
  var textoEscrito = textArea.value;
  var validador = textoEscrito.match(/^[a-z]*$/);

  if (!validador || validador === 0) {
    alert("Solo son permitidas letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function btnEncriptar() {
  if (!validarTexto()) {
    var textoEncriptado = encriptarTexto(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    copia.style.display = "block";
  }
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

function btnDesencriptar(){
  const textoEncriptado = desencriptarTexto(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}
