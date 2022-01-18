
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const encriptadorAcme = (texto) => {
    encriptado = texto
        .replaceAll(/a/g, 'ai')
        .replaceAll(/e/g, 'enter')
        .replaceAll(/i/g, 'imes')
        .replaceAll(/o/g, 'ober')
        .replaceAll(/u/g, 'ufat')
    return encriptado;
}

const desencriptadorAcme = (texto) => {
    desencriptado = texto
        .replaceAll(/ai/g, 'a')
        .replaceAll(/enter/g, 'e')
        .replaceAll(/imes/g, 'i')
        .replaceAll(/ober/g, 'o')
        .replaceAll(/ufat/g, 'u')
    return desencriptado;
}

console.log(encriptadorAcme('hola'))

console.log(desencriptadorAcme('hoberlaimes'))