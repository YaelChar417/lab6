const btn_calcular = document.getElementById("btn_calcular");
const select = document.getElementById("producto");
const img = document.getElementById("imgContainer")
const subtotal_container = document.getElementById("subtotal");
const iva_container = document.getElementById("iva");
const total_container = document.getElementById("total");


const calcularCosto = () => {
    const opcion = select.value;
    const cantidad = document.getElementById("cantidad").value;
    const iva = 0.16;

    if (opcion === "pollo")
        {   
            const precio = 90; // precio por kilo de pollo
            subtotal_container.value = precio * cantidad;
            iva_container.value = (precio * cantidad) * iva;
            total_container.value = (precio * cantidad) + ((precio * cantidad) * iva);
            img.innerHTML = `<img alt="carne de pollo" class="card short--img" src="img/pollo.jpg">`
        } else if (opcion == "res")
        {
            const precio = 110; // precio por kilo
            subtotal_container.value = precio * cantidad;
            iva_container.value = (precio * cantidad) * iva;
            total_container.value = (precio * cantidad) + ((precio * cantidad) * iva);
            img.innerHTML = `<img alt="carne de res" class="card short--img" src="img/res.jpg">`
        } else if (opcion == "cerdo")
        {
            const precio = 130; // precio por kilo
            subtotal_container.value = precio * cantidad;
            iva_container.value = (precio * cantidad) * iva;
            total_container.value = (precio * cantidad) + ((precio * cantidad) * iva);
            img.innerHTML = `<img alt="carne de cerdo" class="card short--img" src="img/cerdo.webp">`
        } else
        {   
            img.innerHTML = `<img alt="Selecciona elemento valido" class="card short--img" src="">`
        }
}

btn_calcular.onclick = calcularCosto;

const btn_tam = document.getElementById("cambiarTam");
const btn_fuente = document.getElementById("cambiarTipo");
const btn_color = document.getElementById("cambiarColor");

const cambiarTamanio = () =>{
    const text = document.getElementById("cambiar");
    text.style.fontSize = "2rem";
    btn_tam.onclick = ponerTamOriginal;
}

const cambiarFuente = () => {
    const text = document.getElementById("cambiar");
    text.style.fontFamily = "Comic Sans";
    btn_fuente.onclick = ponerFuenteOriginal;
}

const cambiarColor = () => {
    const text = document.getElementById("cambiar");
    text.style.color = "white";
    btn_color.onclick = ponerColorOriginal;
}

const ponerTamOriginal = () => {
    const text = document.getElementById("cambiar");
    text.style.fontSize = "1rem";
    btn_tam.onclick = cambiarTamanio;
}

const ponerFuenteOriginal = () => {
    const text = document.getElementById("cambiar");
    text.style.fontFamily = "sans-serif";
    btn_fuente.onclick = cambiarFuente;
}

const ponerColorOriginal = () => {
    const text = document.getElementById("cambiar");
    text.style.color = "black";
    btn_color.onclick = cambiarColor;
}

btn_tam.onclick = cambiarTamanio;
btn_fuente.onclick = cambiarFuente;
btn_color.onclick = cambiarColor;