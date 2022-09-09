const pasosFrontend = ["HTML y CSS", "Javascript", "Node JS"];

function initApp(){
    let ingresar=confirm("¿Desea ingresar a la guia?");
    while(ingresar){
        const conocimientoAdquirido= prompt(`Lista de pasos:${mostrarPasos()}\n Ingrese el conocimiento ya adquirido`);
        nuevoConocimiento(conocimientoAdquirido)
    }
    alert=("Nos vemos!Cerrando guia...")
}

initApp();

function mostrarPasos(){
    return pasosFrontend.join()
}

function nuevoConocimiento(conocimiento){
    const valido = pasosFrontend.includes(conocimiento)
    console.log("valido", valido);
    if (valido)
    alert("El conocimiento es valido y valioso")
    else("Conocimiento no encontrado")
}