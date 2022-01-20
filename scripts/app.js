const input = document.querySelector('#textAreaInput').value;
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

// Encriptado
btnEncript.addEventListener("click", (e) =>  {
e.preventDefault()  // Evita que se recargue la página
const encriptado = input
    .replaceAll( 'e', 'enter' )
    .replaceAll( 'i', 'imes' )
    .replaceAll( 'a', 'ai' )
    .replaceAll( 'o', 'ober' )
    .replaceAll( 'u', 'ufat' );
output.value = encriptado;
});



// Desencriptado
btnDecript.addEventListener("click", (e) => {
e.preventDefault()  // Evita que se recargue la página
const desencriptado = input
    .replaceAll( 'enter', 'e' )
    .replaceAll( 'imes', 'i' )
    .replaceAll( 'ai', 'a' )
    .replaceAll( 'ober', 'o' ) 
    .replaceAll( 'ufat', 'u' );
output.value = desencriptado;
});

btnDelete.addEventListener("click", (e) => {
e.preventDefault()  // Evita que se recargue la página
output.value = '';
});

// Función de copiar 
const copy = () => {
    let copyText = document.querySelector('#textAreaOutput');
    copyText.select();
    document.execCommand('copy');
    clean(output);
}
document.querySelector('#btnCopy').addEventListener('click', copy);

const clean = (output) => {
    output.value = "Copiado...";
    setTimeout(() => {
        output.value = "";
    }, 500);
}

// Ejemplo
// /*--------------------------------ENCRIPTAR MENSAJE-------------------------------*/
// document.querySelector("#btn-encriptar").addEventListener("click", function (event) {
//     event.preventDefault();
//     var texto = document.querySelector("#input-texto").value;
//     var textCodif = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
//     document.querySelector("#msg").value = textCodif;
// });

// /*------------------------------DESENCRIPTAR MENSAJE-------------------------------*/
// document.querySelector("#btn-desencriptar").addEventListener("click", function (event) {
//     event.preventDefault();
//     var texto = document.querySelector("#input-texto").value;
//     var textDecod = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
//     document.querySelector("#msg").value = textDecod;

// });

// /*---------------------------------BOTÓN COPIAR-------------------------------*/
// document.querySelector("#btn-copy").addEventListener("click", function (event) {
//     event.preventDefault();
//     var copiarText = document.querySelector("#msg"); 
//     copiarText.select();
//     document.execCommand("copy");
// });





