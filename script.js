var chavesVogais = ["e", "i", "a", "o", "u"];
var chavesCrip = ["\n", "imes", "ai", "ober", "ufat"];
var textoCripto = [];
var textoDecripto = [];
var resultado = "";
var texto = "";

function clear() {
    document.getElementById('cod').value = '';
    document.getElementById('decod').value = '';
}

function criptografa(cript) {
    let texto="";
    switch (cript) {
        case chavesVogais[0]:
            texto = chavesCrip[0];
            break;
        case chavesVogais[1]:
            texto = chavesCrip[1];
            break;
        case chavesVogais[2]:
            texto = chavesCrip[2];
            break;
        case chavesVogais[3]:
            texto = chavesCrip[3];
            break;
        case chavesVogais[4]:
            texto = chavesCrip[4];
            break;
        default :
            texto = cript;
    }
    return texto;
}

function read_textarea_cod() {
    let text = document.getElementById('cod').value;
    for (let i = 0; i < text.length; i++) {
        textoCripto.push(criptografa(text.substring(i, i + 1)));
        console.log(textoCripto[i]);
    }
    return textoCripto;
}

function insertToCripto(matriz) {
    let str="";
    for(let i=0; i<matriz.length; i++) {
        str = str + matriz[i];
    }
    return str;
}

function read_textarea_decod() {
    let text = document.getElementById('decod').value;
    return text;
}

var evt_cod = document.querySelector('#btn_cod')
evt_cod.addEventListener('click', function () {
    clear();
    let str = "";
    str = insertToCripto(read_textarea_cod());
    document.getElementById('decod').value = str;
});

var evt_decod = document.querySelector('#btn_decod')
evt_decod.addEventListener('click', function () {
    console.log("Descriptografar: " + read_textarea_decod());
    clear();
});


clear();


