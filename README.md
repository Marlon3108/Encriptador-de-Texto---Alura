# Encriptador-de-Texto---Alura

# Encriptador de Textos
Proyecto desarrollado como evidencia de la actividad Encriptador de Texto del programa One

Este proyecto es una aplicación web que permite a los usuarios encriptar y desencriptar texto utilizando un método simple de sustitución de caracteres. Además, cuenta con una funcionalidad para copiar el texto encriptado al portapapeles y muestra alertas para informar al usuario sobre el estado de las operaciones realizadas.

## Características

- **Encriptación**: Convierte vocales en secuencias específicas de caracteres.
- **Desencriptación**: Reconvierte las secuencias de caracteres a las vocales originales.
- **Copiar al Portapapeles**: Copia el texto encriptado al portapapeles con un solo clic.
- **Alertas**: Notificaciones visuales que informan al usuario sobre el estado de sus acciones, como errores o confirmaciones.

## Estructura del Proyecto

├── index.html # Archivo principal de la aplicación ├── styles/ │ ├── style.css # Estilos de la aplicación ├── js/ │ ├── script.js # Lógica de la aplicación └── README.md # Este archivo

## Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación web.
- **CSS3**: Estilos para la apariencia de la aplicación.
- **JavaScript**: Lógica para la encriptación, desencriptación y manejo de eventos.

## Instrucciones de Uso

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Marlon3108/Encriptador-de-Texto---Alura.git

2. Abrir el archivo index.html en tu navegador:

   Navega hasta la carpeta del proyecto y abre el archivo index.html en tu navegador preferido.

3. Uso de la aplicación:

   * Encriptar: Ingresa un texto en el área de texto y presiona el botón "Encriptar". El texto encriptado aparecerá en el área de texto del       lado derecho.
   * Desencriptar: Ingresa un texto encriptado en el área de texto y presiona el botón "Desencriptar". El texto desencriptado aparecerá en        el área de texto del lado derecho.
   * Copiar: Una vez que el texto esté encriptado, presiona el botón "Copiar" para copiar el texto encriptado al portapapeles. Recibirás          una notificación en la parte superior de la pantalla indicando que el texto ha sido copiado.
     
## Ejemplos de Encriptación

* "hola" se convierte en "hoberlenter".
* "gato" se convierte en "gaitober".

## Personalización

Si deseas modificar la lógica de encriptación/desencriptación, puedes editar las funciones en el archivo script.js:

```
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
```
Puedes ajustar las combinaciones de caracteres en la matriz matrizCodigo según tus necesidades.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto o agregar nuevas funcionalidades, sigue estos pasos:

## Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature-nueva-funcionalidad).
Realiza tus cambios y haz commit de ellos (git commit -m 'Agregar nueva funcionalidad').
Haz push a la rama (git push origin feature-nueva-funcionalidad).
Abre un Pull Request.

## Licencia
Este proyecto está licenciado bajo la MIT License.

¡Gracias por usar el Encriptador de Textos! Esperamos que te sea útil.
