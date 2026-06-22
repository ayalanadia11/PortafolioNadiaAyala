
function mostrarDetalles(titulo, descripcion, img1, img2, linkJuego, linkVideo, linkDescarga) {
    const modal = document.getElementById("miModal");
    
    
    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalDescripcion").innerText = descripcion;
    
    
    const modalImg1 = document.getElementById("modalImagen1");
    const modalImg2 = document.getElementById("modalImagen2");
    const contenedorVideo = document.getElementById("contenedorVideoModal");
    const modalVideo = document.getElementById("modalVideo");
    
    
    const btnJugar = document.getElementById("btnModalJugar");
    const btnDescargar = document.getElementById("btnModalDescargar");

    
    if (img1) {
        modalImg1.src = img1;
        modalImg1.style.display = "block";
    } else {
        modalImg1.style.display = "none";
    }

    
    if (img2) {
        modalImg2.src = img2;
        modalImg2.style.display = "block";
    } else {
        modalImg2.style.display = "none";
    }

    
    if (linkVideo && linkVideo.trim() !== "") {
        modalVideo.src = linkVideo; 
        contenedorVideo.style.display = "block"; 
    } else {
        modalVideo.src = ""; 
        contenedorVideo.style.display = "none"; 
    }

    
    if (linkJuego) {
        btnJugar.href = linkJuego;
        btnJugar.style.display = "inline-block";
    } else {
        btnJugar.style.display = "none";
    }

    
    if (linkDescarga) {
        btnDescargar.href = linkDescarga;
        btnDescargar.style.display = "inline-block";
    } else {
        btnDescargar.style.display = "none";
    }

    
    modal.style.display = "flex";
}


function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
    document.getElementById("modalVideo").src = ""; 
}


window.onclick = function(event) {
    const modal = document.getElementById("miModal");
    if (event.target == modal) {
        cerrarModal();
    }
}
