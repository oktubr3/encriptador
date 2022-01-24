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

// Encriptado
btnEncript.addEventListener('click', (e) => {
    e.preventDefault()  // Evita que se recargue la página
    let text = input.value;
    validarInput();  // Valida que el input no tenga caracteres especiales   
    if (valido) {
        output.value = text
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('o', 'ober')
            .replaceAll('u', 'ufat');
    }
});

// Desencriptado
btnDecript.addEventListener("click", (e) => {
    e.preventDefault()  // Evita que se recargue la página
    let text = input.value;
    validarInput();  // Valida que el input no tenga caracteres especiales
    if(valido){
        output.value = text
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ober', 'o')
            .replaceAll('ufat', 'u');
    }
});

// Eliminar texto
btnDelete.addEventListener("click", (e) => {
    e.preventDefault()  // Evita que se recargue la página
    output.value = '';
});

// Copiar al portapapeles
const copy = () => {
    output.select();
    document.execCommand('copy');
    copiado();
}
btnCopy.addEventListener('click', copy);

// Mensaje de copiado
const copiado = () => {
    output.value = "Copiando...";
    setTimeout(() => {
        output.value = "";
    }, 500);
}

// Validar input
let valido = true;
validarInput = () => {
    const regexp = /^[a-z0-9 ]+$/;
    if (!regexp.test(input.value)) {
        alert('No se permiten caracteres especiales ni mayusculas!');
        input.value = '';
        output.value = '';
        valido = false;
    }

}




