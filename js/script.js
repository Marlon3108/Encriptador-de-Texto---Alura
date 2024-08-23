const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const txtNoEncontrado = document.querySelector(".msgNoEncontrado");
const msgTxtNoEncontrado = document.querySelector(".msgTxtNoEncontrado");
const btnCopiar = document.querySelector('.btn-copiar');

function btnEncriptar() {
    if (textArea.value.trim() === "") {
        mostrarAlerta("Por favor, ingrese un texto para encriptar.");
        return;
    }
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

    mensaje.style.backgroundImage = "none";

    if (textoEncriptado !== "") {
        txtNoEncontrado.style.display = 'none';
        msgTxtNoEncontrado.style.display = 'none';
        btnCopiar.style.display = 'block';
    } else {
        txtNoEncontrado.style.display = 'block';
        msgTxtNoEncontrado.style.display = 'block';
        btnCopiar.style.display = 'none';
    }

    if (window.innerWidth < 768 && textoEncriptado !== "") {
        mensaje.style.display = 'block';
    }
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    if (textArea.value.trim() === "") {
        mostrarAlerta("Por favor, ingrese un texto para desencriptar.");
        return;
    }

    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function mostrarAlerta(mensaje) {
    const alertaError = document.getElementById("alertaError");
    alertaError.textContent = mensaje;
    alertaError.classList.add("visualizar");
    setTimeout(() => {
        alertaError.classList.remove("visualizar");
    }, 3000);
}

function copiarTexto() {
    let texto = mensaje.value;
    const copiarContenido = async () => {
        try {
            await navigator.clipboard.writeText(texto);
            console.log('Contenido copiado al portapapeles');
            mostrarMsgCopiado();
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    };
    copiarContenido();
}

function mostrarMsgCopiado() {
    const msgCopiado = document.getElementById("alertaCopiado");
    msgCopiado.classList.add("visualizar");
    setTimeout(() => {
        msgCopiado.classList.remove("visualizar");
    }, 3000);
}

btnCopiar.addEventListener('click', copiarTexto);
