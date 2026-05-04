
document.addEventListener('DOMContentLoaded', function() {
    

    const formulario = document.getElementById('form-whatsapp');

 
    formulario.addEventListener('submit', function(evento) {
        
        evento.preventDefault();

        const nombre = document.getElementById('wa-nombre').value;
        const email = document.getElementById('wa-email').value;
        const telefono = document.getElementById('wa-telefono').value;
        const nivel = document.getElementById('wa-nivel').value;
        const mensaje = document.getElementById('wa-mensaje').value;

        const numeroDestino = "51907065433";

        let textoWhatsApp = `Hola, quisiera solicitar información.%0A%0A`;
        textoWhatsApp += `*Mis Datos:*%0A`;
        textoWhatsApp += `- Nombre: ${nombre}%0A`;
        textoWhatsApp += `- Email: ${email}%0A`;
        textoWhatsApp += `- Teléfono: ${telefono}%0A`;
        textoWhatsApp += `- Nivel Educativo: ${nivel}%0A%0A`;
        textoWhatsApp += `*Mensaje:*%0A${mensaje}`;

        const textoCodificado = encodeURI(textoWhatsApp);

        const urlWhatsApp = `https://wa.me/${numeroDestino}?text=${textoCodificado}`;

        window.open(urlWhatsApp, '_blank');
    });

});