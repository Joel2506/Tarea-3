function enviarContactos() {
    var datos = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value
    } 
    fetch("http://www.raydelto.org/agenda.php",{
        method: 'POST',
        body: JSON.stringify(datos)
    });
    clearCamps();
    alert("Necesitas reiniciar la pagina para ver los datos actualizados...");
}

function clearCamps(){
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('telefono').value = "";
    location.reload();
}