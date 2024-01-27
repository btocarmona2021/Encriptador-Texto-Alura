const textoAEncriptar = document.querySelector('#textoEncriptar');
const textoADesencriptar = document.querySelector('#textoDesencriptado');

function encriptar() {
  let textoSinEncriptar = textoAEncriptar.value;
  textoADesencriptar.value = encriptarTexto(textoSinEncriptar);
}

function desencriptar() {
  let textoEncriptado = textoAEncriptar.value;
  textoADesencriptar.value = desencriptarTexto(textoEncriptado);
}

function copiarTexto() {
  textoADesencriptar.select();
  document.execCommand('copy');

  navigator.clipboard.readText().then(texto => {
    textoAEncriptar.focus();
    textoAEncriptar.value = texto;
  })

}

function ocultarimagen() {
  const ocultaimagen = document.querySelector('.ingresatexto');
  ocultaimagen.style.display = "none";
}


function encriptarTexto(texto) {
  let nuevaFrase = "";
  if (texto !== "") {
    for (let i = 0; i < texto.length; i++) {
      switch (texto.substring(i, i + 1)) {
        case "á":
        case"a": {
          nuevaFrase += "ai"
          break;
        }
        case "é":
        case"e": {
          nuevaFrase += "enter"
          break;
        }
        case "í":
        case"i": {
          nuevaFrase += "imes"
          break;
        }
        case"ó":
        case"o": {
          nuevaFrase += 'ober';
          break;
        }
        case "ú":
        case"u": {
          nuevaFrase += "ufat";
          break;
        }
        default: {
          nuevaFrase += texto.substring(i, i + 1);
        }
      }
    }
    return nuevaFrase;
  } else {
    return 'No hay texto a Encriptar';
  }
}

function desencriptarTexto(texto) {
  let nuevaFraseDesencriptada = "";
  if (texto !== "") {
    for (let i = 0; i < texto.length; i++) {
      switch (texto.substring(i, i + 1)) {
        case "a": {
          if (texto.substring(i, i + 2) === 'ai') {
            nuevaFraseDesencriptada += 'a'
            i++;
          }
        }
          break;
        case "e": {
          if (texto.substring(i, i + 5) === 'enter') {
            nuevaFraseDesencriptada += 'e'
            i += 4;
          }
        }
          break;
        case "i": {
          if (texto.substring(i, i + 4) === 'imes') {
            nuevaFraseDesencriptada += 'i'
            i += 3;
          }
        }
          break;
        case "o": {
          if (texto.substring(i, i + 4) === 'ober') {
            nuevaFraseDesencriptada += 'o'
            i += 3;
          }
          break;
        }
        case "u": {
          if (texto.substring(i, i + 4) === 'ufat') {
            nuevaFraseDesencriptada += 'u'
            i += 3;
          }
        }
          break;
        default:
          nuevaFraseDesencriptada += texto.substring(i, i + 1);
          break;
      }
    }
    return nuevaFraseDesencriptada;
  } else {

    return 'No hay texto a Desencriptar';
  }

}
