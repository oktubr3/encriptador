const input = document.querySelector('#textAreaInput');
let output = document.querySelector('#textAreaOutput');
const btnEncript = document.querySelector('#btnEncript');
const btnDecript = document.querySelector('#btnDecript');
const btnCopy = document.querySelector('#btnCopy');
const btnDelete = document.querySelector('#btnDelete');





/* Reglas de encriptación: 
'e' es convertido para 'enter' 
'i' es convertido para 'imes'
'a' es convertido para 'ai'
'o' es convertido para 'ober'
'u' es convertido para 'ufat'
Solo letras minusculas
No se permite acentuación de palabras 
*/

// Encriptar
const encriptarTexto = () => {
    validarInput();
    if (!valido) {
        alert('Por favor no uses caracteres especiales ni mayusculas')
        location.reload(); //Recargar la página
    } else {
        let text = input.value;
        let letraModificada = text
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");
        return output.value = letraModificada;
    }
}
btnEncript.onclick = encriptarTexto;

// Desencriptar
const desencriptarTexto = () => {
    validarInput();
    let text = input.value;
    if (!valido) {
        alert('Por favor no uses caracteres especiales ni mayusculas')
        location.reload(); //Recargar la página
    } else {
        let letraModificada = text
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        return output.value = letraModificada;
    }
}
btnDecript.onclick = desencriptarTexto;

// Eliminar texto
const borrar = () => {
    output.value = '';
};
btnDelete.onclick = borrar;

// Copiar al portapapeles
const copy = () => {
    output.select();
    document.execCommand('copy');
    copiado();
}


// Mensaje de copiado
const copiado = () => {
    output.value = "Copiando...";
    setTimeout(() => {
        output.value = "";
    }, 500);
}
btnCopy.onclick = copy;

// Validar input
let valido = true;
const validarInput = () => {
    const regexp = /^[a-z0-9 ]+$/;
    if (!regexp.test(input.value)) {
        input.value = '';
        output.value = '';
        valido = false;
    }
}




