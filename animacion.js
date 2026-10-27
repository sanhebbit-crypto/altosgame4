const texto = document.getElementById("texto-animado");

if (texto) {
    const mensajes = texto.dataset.mensajes.split("|");

    let indiceMensaje = 0;
    let indiceLetra = 0;
    let borrando = false;

    function escribirTexto() {
        const mensajeActual = mensajes[indiceMensaje];

        if (borrando) {
            texto.textContent = mensajeActual.substring(0, indiceLetra - 1);
            indiceLetra--;
        } else {
            texto.textContent = mensajeActual.substring(0, indiceLetra + 1);
            indiceLetra++;
        }

        let velocidad = borrando ? 50 : 100;

        if (!borrando && indiceLetra === mensajeActual.length) {
            velocidad = 1500;
            borrando = true;
        } else if (borrando && indiceLetra === 0) {
            borrando = false;
            indiceMensaje = (indiceMensaje + 1) % mensajes.length;
            velocidad = 400;
        }

        setTimeout(escribirTexto, velocidad);
    }

    escribirTexto();
}