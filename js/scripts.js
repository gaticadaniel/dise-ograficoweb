function agendarCita() {
    var mensaje = "Hola, me gustaría agendar una cita.";
    var numero = "51987654321"; // Reemplaza con tu número de WhatsApp
    var url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}