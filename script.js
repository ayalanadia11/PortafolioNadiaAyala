// Función universal actualizada con soporte para Video Embed y Descargas
function mostrarDetalles(titulo, descripcion, img1, img2, linkJuego, linkVideo, linkDescarga) {
    const modal = document.getElementById("miModal");
    
    // Inyectar textos básicos
    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalDescripcion").innerText = descripcion;
    
    // Capturar componentes multimedia
    const modalImg1 = document.getElementById("modalImagen1");
    const modalImg2 = document.getElementById("modalImagen2");
    const contenedorVideo = document.getElementById("contenedorVideoModal");
    const modalVideo = document.getElementById("modalVideo");
    
    // Capturar botones de acción
    const btnJugar = document.getElementById("btnModalJugar");
    const btnDescargar = document.getElementById("btnModalDescargar");

    // 1. Control de Imagen 1
    if (img1) {
        modalImg1.src = img1;
        modalImg1.style.display = "block";
    } else {
        modalImg1.style.display = "none";
    }

    // 2. Control de Imagen 2
    if (img2) {
        modalImg2.src = img2;
        modalImg2.style.display = "block";
    } else {
        modalImg2.style.display = "none";
    }

    // 3. Control del Video de YouTube Integrado
    if (linkVideo) {
        modalVideo.src = linkVideo; // Asigna el link en formato /embed/
        contenedorVideo.style.display = "block"; // Muestra el reproductor
    } else {
        modalVideo.src = ""; // Limpia el recurso
        contenedorVideo.style.display = "none"; // Oculta el reproductor
    }

    // 4. Control del botón Jugar Online (ej. Scratch)
    if (linkJuego) {
        btnJugar.href = linkJuego;
        btnJugar.style.display = "inline-block";
    } else {
        btnJugar.style.display = "none";
    }

    // 5. Control del nuevo botón de Descarga (ej. Unity/RPG Maker)
    if (linkDescarga) {
        btnDescargar.href = linkDescarga;
        btnDescargar.style.display = "inline-block";
    } else {
        btnDescargar.style.display = "none";
    }

    // Abrir el modal con transiciones limpias
    modal.style.display = "flex";
}

// Función modificada para limpiar el video al cerrar (sino se sigue escuchando el audio de fondo!)
function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
    document.getElementById("modalVideo").src = ""; // Corta el video por completo
}

// Cierre al cliquear en la zona oscura exterior
window.onclick = function(event) {
    const modal = document.getElementById("miModal");
    if (event.target == modal) {
        cerrarModal();
    }
}