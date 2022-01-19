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
const encripta = texto => texto
    .replaceAll( 'e', 'enter' )
    .replaceAll( 'i', 'imes' )
    .replaceAll( 'a', 'ai' )
    .replaceAll( 'o', 'ober' )
    .replaceAll( 'u', 'ufat' );


console.log( encripta ('hola como estas') )

// Desencriptado
const desencripta = texto => texto
    .replaceAll( 'enter', 'e' )
    .replaceAll( 'imes', 'i' )
    .replaceAll( 'ai', 'a' )
    .replaceAll( 'ober', 'o' )

console.log(desencripta('hoberlai cobermober enterstais'))


// Función de copiar 

const copy = () => {
    let copyText = document.querySelector('#msg');
    copyText.select();
    document.execCommand('copy');
}

document.querySelector('#copy').addEventListener('click', copy);


