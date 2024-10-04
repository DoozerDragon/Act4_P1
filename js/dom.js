let identificador, etiqueta, clase, nombre;

// getElementById
identificador = document.getElementById("titulo");
console.log(identificador.innerText);

// getElementByTagName
seccion = document.getElementsByTagName("section");
console.log(seccion[0].innerText);

etiqueta = document.getElementsByTagName("p");
console.log(etiqueta[0].innerText);

// getElementByClassName
clase = document.getElementsByClassName("parrafo");
console.log(clase[0].innerText);

// getElementByName
nombre = document.getElementsByName("subtitulo");
console.log(nombre[1].textContent);

// Crear nodo en el DOM
let elemento, contenido;
elemento = document.createElement("p");
contenido = document.createTextNode("Nuevo párrafo");
elemento.appendChild(contenido);
seccion[1].insertBefore(elemento, etiqueta[2]);

// Reemplazar un nodo
elemento = document.createElement("p");
contenido = document.createTextNode("Reemplazo párrafo");
elemento.setAttribute("class", "parrafo2");
elemento.appendChild(contenido);
seccion[1].replaceChild(elemento, clase[0]);

// Eliminar nodo
seccion[0].removeChild(nombre[0]);

// Crear nodo dentro de otro nodo
elemento = document.createElement("article");
contenido = document.createTextNode("Artículo de sección");
elemento.appendChild(contenido);

// Insertar contenido en un nodo
document.getElementById("contenido").innerHTML = 'Información <br/> <p class="nuevo"> Otro párrafo en el nodo</p>';
document.getElementById("enlace").innerHTML = "Google";

// Cambiar atributos de un nodo
etiqueta[0].setAttribute("class", "parrafo nuevo");
seccion[2].setAttribute("class", "contenido");
seccion[3].setAttribute("class", "contenido");

//Estilos
document.getElementById("titulo").style.background = "#f00";
document.getElementById("contenido").style.marginTop = '10px';

//Sección "Conóceme" y agregar al DOM
let container = document.createElement("div");
container.setAttribute("class", "container");

for (let i = 0; i < 2; i++) {
    //Crear contenedor de perfil
    let profile = document.createElement("div");
    profile.setAttribute("class", "profile");

    //Agregar imagen de perfil
    let img = document.createElement("img");
    img.setAttribute("src='imagen/m.png'");  // Cambia esta ruta por la imagen real
    profile.appendChild(img);

    //Agregar "Conóceme"
    let title = document.createElement("h1");
    let titleText = document.createTextNode("Conóceme");
    title.appendChild(titleText);
    profile.appendChild(title);

    // Agregar la tarjeta de perfil al contenedor principal
    container.appendChild(profile);
}

// Insertar el contenedor de tarjetas en el cuerpo del documento
document.body.appendChild(container);
