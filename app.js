let amigos = [];

function agregarAmigo(){
    let nombreAñadido = document.getElementById('amigo');
    let nombreLimpio = nombreAñadido.value.trim();

    if (nombreLimpio === ""){
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    let nombreFormateado = nombreLimpio.charAt(0).toUpperCase() + nombreLimpio.slice(1).toLowerCase();

    
    if (amigos.includes(nombreFormateado)) { 
        alert('Este nombre ya ha sido añadido.');
    } else {
        amigos.push(nombreFormateado);
        updateList();
        nombreAñadido.value = "";
    }
}

function updateList(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        item.style.cursor = "pointer";
        item.title = "Haz clic para eliminar";

        // Cambiar color al pasar el mouse
        item.onmouseover = function() {
            item.style.color = "red";
        };
        item.onmouseout = function() {
            item.style.color = ""; // Vuelve al color original
        };

        // Eliminar el nombre al hacer clic
        item.onclick = function() {
            eliminarAmigo(i);
        };
        lista.appendChild(item);
    }
} 

function eliminarAmigo(index) {
    amigos.splice(index, 1); 
    updateList();
}

function sortearAmigo(){
    if (amigos.length > 0){
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[indiceAleatorio];

        //Elimina el amigo seleccionado para que no se repita. (No forma parte del trabajo)
        /*
        amigos.splice(indiceAleatorio, 1);
        updateList();
        */
    
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`
    } else {
        alert('Por favor, añade amigos antes para obtener tu amigo secreto.');
    }
}
