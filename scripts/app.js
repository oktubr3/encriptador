/* Reglas de encriptación: 
'e' es convertido para 'enter' 
'i' es convertido para 'imes'
'a' es convertido para 'ai'
'o' es convertido para 'ober'
'u' es convertido para 'ufat'
Solo letras minusculas
No se permite acentuación de palabras 
*/

const encripta = texto => texto
    .replaceAll( 'e', 'enter' )
    .replaceAll( 'i', 'imes' )
    .replaceAll( 'a', 'ai' )
    .replaceAll( 'o', 'ober' )
    .replaceAll( 'u', 'ufat' );


console.log( encripta ('hola como estas') )


/* Reglas de desencriptación: 
'enter' es convertido para 'e' 
'imes' es convertido para 'i'
'ai' es convertido para 'a'
'ober' es convertido para 'o'
'ufat' es convertido para 'u'
Solo letras minusculas
No se permite acentuación de palabras   
*/

const desencripta = texto => {
    for (let i = 0; i < texto.length; i++) {
        texto = texto.replace( 'enter', 'e' );
        texto = texto.replace( 'imes', 'i' );
        texto = texto.replace( 'ai', 'a' );
        texto = texto.replace( 'ober', 'o' );
        texto = texto.replace( 'ufat', 'u' );
                
            
    }
    return texto;
}

console.log(desencripta('hoberlai cobermober enterstais'))


// Función de copiar 

function copy() {
    var copyText = document.querySelector('#msg');
    copyText.select();
    document.execCommand('copy');
}

document.querySelector('#copy').addEventListener('click', copy);


