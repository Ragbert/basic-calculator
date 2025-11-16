const pantalla = document.querySelector(".Pantalla");
const botones = document.querySelectorAll(".btn");

//Metodo para que al presionar los botonoes de la calculadora, se visualizen en pantalla
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
            if (boton.id === "C") {
                pantalla.textContent = "0";
                return;
            }
            //Botón para borrar los datos y el mensaje en caso de algún error
            if (boton.id === "borrar"){
                if (pantalla.textContent.length === 1 || pantalla.textContent ==="Error"){
                    pantalla.textContent = "0";
                } else {
                    pantalla.textContent = pantalla.textContent.slice(0,-1);
                }
                return;
            }

            //Botón para realizar todos los calculos básicos
            if (boton.id === "igual") {
                try{
                    pantalla.textContent = eval(pantalla.textContent);
                } catch {
                    pantalla.textContent = "Error";
                }
                return;
            }
    
            //metodo para quitar el 0 y el mensaje de error de la pantalla 
            if (pantalla.textContent === "0" || pantalla.textContent ==="Error") {
                pantalla.textContent = botonApretado;
            } else {
                pantalla.textContent += botonApretado;
            }
    })
})