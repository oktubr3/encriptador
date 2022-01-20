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

function clean(output) {
    output.value = "Copiado...";
    setTimeout(() => {
        output.value = "";
    }, 500);
}

document.querySelector('#btnCopy').addEventListener('click', copy);

