const btn = document.getElementById("btn_calcular");
const select = document.getElementById("producto");

const img = document.getElementById("imgContainer")

const test = () => {
    const opcion = select.value;
    console.log(opcion);
    img.innerHTML = `<img alt="Carne de pollo" class="card short--img" src="img/pollo.jpg">`
}

btn.onclick = test;