var chavesVogais = ["e", "i", "a", "o", "u"];
var chavesCrip = [`\n`, "imes", "ai", "ober", "ufat"];
var textoCripto = [];
var textoDecripto = [];
var texto = "";

function clear() {
  document.getElementById("cod").value = "";
  document.getElementById("decod").value = "";
  textoCripto.length = 0;
  textoDecripto.length = 0;
  texto = "";
}

function criptografa(cript) {
  let str = "";
  switch (cript) {
    case chavesVogais[0]:
      str = chavesCrip[0];
      break;
    case chavesVogais[1]:
      str = chavesCrip[1];
      break;
    case chavesVogais[2]:
      str = chavesCrip[2];
      break;
    case chavesVogais[3]:
      str = chavesCrip[3];
      break;
    case chavesVogais[4]:
      str = chavesCrip[4];
      break;
    default:
      str = cript;
  }
  cript = "";
  return str;
}

function descriptografa(chave) {
  let str = "";
  switch (chave) {
    case chavesCrip[0]:
      str = chavesVogais[0];
      break;
    case chavesCrip[1]:
      str = chavesVogais[1];
      break;
    case chavesCrip[2]:
      str = chavesVogais[2];
      break;
    case chavesCrip[3]:
      str = chavesVogais[3];
      break;
    case chavesCrip[4]:
      str = chavesVogais[4];
      break;
    default:
      str = chave;
  }
  chave = "";
  return str;
}

function insertToCripto(matriz) {
  let str_insert = "";
  for (let i = 0; i < matriz.length; i++) {
    str_insert = str_insert + matriz[i];
  }
  return str_insert;
}

function read_textarea_cod() {
  let text = "";
  text = document.getElementById("cod").value;
  clear();
  for (let i = 0; i < text.length; i++) {
    textoCripto.push(criptografa(text.substring(i, i + 1)));
  }
  return textoCripto;
}

function read_textarea_decod() {
  let text = "";
  text = document.getElementById("cod").value;
  clear();
  let j = 0;
  while (j < text.length) {
    let txt = text.substring(j, j + 1);
    if (txt == `\n`) {
      textoDecripto.push("e");
      txt="";
    }
    if (text.substring(j, j + 4) == "imes") {
      txt = chavesVogais[1];
      j += 3;
    }
    if (text.substring(j, j + 2) == "ai") {
      txt = chavesVogais[2];
      j += 1;
    }
    if (text.substring(j, j + 4) == "ober") {
      txt = chavesVogais[3];
      j += 3;
    }
    if (text.substring(j, j + 4) == "ufat") {
      txt = chavesVogais[4];
      j += 3;
    }
    textoDecripto.push(txt);
    j++;
  }
  return textoDecripto;
}

var evt_cod = document.querySelector("#btn_cod");
evt_cod.addEventListener("click", function () {
  let str = "";
  document.getElementById("decod_mensagens").style.display = "none";
  document.getElementById("textareadecod").style.display = "contents";
  str = insertToCripto(read_textarea_cod());
  clear();
  document.getElementById("decod").value = str;
  textoCripto.clear;
  str = "";
});

var evt_decod = document.querySelector("#btn_decod");
evt_decod.addEventListener("click", function () {
  let str = "";
  document.getElementById("decod_mensagens").style.display = "none";
  document.getElementById("textareadecod").style.display = "contents";
  str = insertToCripto(read_textarea_decod());
  clear();
  document.getElementById("decod").value = str;
  textoDecripto.clear;
  str = "";
});

var evt_copy = document.querySelector("#btn_copy");
evt_copy.addEventListener("click", function () {
  let str = "";
  document.getElementById("decod_mensagens").style.display = "contents";
  document.getElementById("textareadecod").style.display = "none";
  str = document.getElementById("decod").value;
  clear();
  document.getElementById("cod").value = str;
  str = "";
});

clear();
