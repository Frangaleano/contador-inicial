// declaro las constantes que van a ser, la pantalla, los botones y la seccion de mensajes

const pantalla = document.querySelector(".pantalla-contador")
const botones = document.querySelectorAll(".btn")
const sectionMensajes = document.getElementById("mensajes")


// inicializo el contador en 0, que luego voy a utilizar para reemplazar su contenido con el de la pantalla.

let contador = 0

// creo una funcion para informar que hicimos dentro de la seccion de mensajes

function crearMensajes(mensaje) {
    let nuevoMensaje = document.createElement("p")

    nuevoMensaje = mensaje

    sectionMensajes.innerHTML = nuevoMensaje
}

// declaro las condicionales:

// si contador es igual a 0, entonces empieza el flujo:
if (contador === 0) {

// realizo una iteracion, para los botones y escucho si hay "click":
    botones.forEach(boton => {
        boton.addEventListener("click", () => {

// SI boton.id es igual a restar, entonces resto 1 al contador, reemplazo el textContent de la pantalla por el contador y muestro mensaje            
            if (boton.id === "restar") {
                contador -= 1
                pantalla.textContent = contador
                crearMensajes("Restaste")
// A su vez, SI restando el contador es menor a 0, entonces reinicializo el contador en 0 y muestro un mensaje acorde               
                if (contador < 0) {
                    contador = 0
                    pantalla.textContent = contador
                    crearMensajes("NO se puede seguir restando.\n SUMA!")
                }
            }
// y si no pasa nada de eso, entonces SI boton.id es igual a sumar, sumo 1 al contador, reemplazo el textContent de la pantalla por contador y muestro mensaje           
            else if (boton.id === "sumar") {
                contador += 1
                pantalla.textContent = contador
                crearMensajes("Sumaste")
            }
        })
    })
}

