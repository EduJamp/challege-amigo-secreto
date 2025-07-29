// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];
const listaElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");
const inputAmigo = document.getElementById("amigo");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/; // Permite letras, acentos y espacios

    if (nombre === "" || regex.test(nombre) === false) {
        alert("Por favor, ingresa un nombre válido.");
        return limpiarCampo();
    }

    listaAmigos.push(nombre);
    mostrarLista();
    inputAmigo.value = "";
}

function mostrarLista() {
    listaElement.innerHTML = "";
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Agrega al menos dos amigos para realizar el sorteo.");
        return;
    }

    const copia = [...listaAmigos];
    const sorteados = [];

    for (let i = 0; i < listaAmigos.length; i++) {
        let candidato;
        do {
            candidato = copia[Math.floor(Math.random() * copia.length)];
        } while (candidato === listaAmigos[i] || sorteados.includes(candidato));

        sorteados.push(candidato);
    }

    resultadoElement.innerHTML = "";
    listaAmigos.forEach((amigo, i) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${sorteados[i]}`;
        resultadoElement.appendChild(li);
    });
}

function limpiarCampo() {
    inputAmigo.value = "";
}

function reiniciarTodo() {
    listaAmigos.length = 0; // Vacía el array
    listaElement.innerHTML = ""; // Limpia la lista visual
    resultadoElement.innerHTML = ""; // Limpia los resultados
    limpiarCampo(); // Limpia el input
}
