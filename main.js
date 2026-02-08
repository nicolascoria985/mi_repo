function actualizarVida(event){
    let valor = event.target.value;
    let barra = document.createElement("div");
    let text = document.querySelector("#texto");
    barra.style.width =  valor + "%";
    barra.style.height = "20px";
    if(valor > 70){
        barra.style.background = "green";
        text.textContent = "estable";
    }else if(valor > 30){
        barra.style.background = "yellow";
        text.textContent = "herido";
    }else{
        barra.style.background = "red";
        text.textContent = "casi muerto";
    }

    let contenedor = document.querySelector("#barraVida");
    contenedor.innerHTML = "";
    contenedor.appendChild(barra);
}

function actualizarFuerza(event){
    let valor = event.target.value;
    let barra = document.createElement("div");
    let texto = document.querySelector("#texto1");
    barra.style.width = valor + "%";
    barra.style.height = "20px";
    if(valor > 70){
        barra.style.background = "green";
        texto.textContent = "fuerte";
    }else if(valor > 30){
        barra.style.background = "yellow";
        texto.textContent = "algo fatigado";
    }else{
        barra.style.background = "red";
        texto.textContent = "muy debil";
    }

    let contenedor = document.querySelector("#barraFuerza");
    contenedor.innerHTML = "";
    contenedor.appendChild(barra);
}

function actualizarEnergia(event){
    let valor = event.target.value;
    let barra = document.createElement("div");
    let texto = document.querySelector("#texto2");
    barra.style.width = valor + "%";
    barra.style.height = "20px";
    if(valor > 70){
        barra.style.background = "green";
        texto.textContent = "energia llena";
    }else if(valor > 30){
        barra.style.background = "yellow";
        texto.textContent = "energia media";
    }else{
        barra.style.background = "red";
        texto.textContent = "energia agotada";
    }

    let contenedor = document.querySelector("#barraEnergia");
    contenedor.innerHTML = "";
    contenedor.appendChild(barra);
}

function actualizarXP(event){
    let valor = event.target.value;
    let barra = document.createElement("div");
    let texto = document.querySelector("#textoEXP");

    barra.style.width = valor + "%";
    barra.style.height = "20px";

    if(valor >= 100){
        barra.style.background = "purple";
        texto.textContent = "¡Subiste de nivel! 🏆";
    } else if(valor >= 70){
        barra.style.background = "blue";
        texto.textContent = "Muy cerca del próximo nivel ✨";
    } else if(valor >= 30){
        barra.style.background = "lightblue";
        texto.textContent = "Experiencia en progreso 📘";
    } else {
        barra.style.background = "gray";
        texto.textContent = "Recién empezando ⚔️";
    }

    let contenedor = document.querySelector("#barraEXP");
    contenedor.innerHTML = "";
    contenedor.appendChild(barra);
}

//dar objetos
function mandar(event){
    let valor = document.querySelector("#objeto").value;
    let rareza = document.querySelector("#rareza").value;
    let li = document.createElement("li");
    li.textContent = valor;

    if(rareza == "comun") li.style.color = "gray";
    if(rareza == "raro") li.style.color = "blue";
    if(rareza == "legendario") li.style.color = "gold";

    //boton por si quiere eliminarse
    let btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.onclick = () => li.remove();

    li.appendChild(btn);
    document.querySelector("#listaInventario").appendChild(li);
}

function toggleHabilidad(event){
if(event.target.checked){
    let li = document.createElement("li");
    li.textContent = event.target.value;
    li.id = event.target.value;
    document.querySelector("#habilidades").appendChild(li);
}else{
    document.querySelector("#" + event.target.value).remove();
}
}

function atacar(){
document.querySelector("#accionActual").textContent = "Atacaste!";
}

function defender(){
document.querySelector("#accionActual").textContent = "Defendiendote!";
}

function curar(){
document.querySelector("#accionActual").textContent = "Curandote!";
}

let musica = document.querySelector("#musicaFondo");
musica.volume = 0.1;