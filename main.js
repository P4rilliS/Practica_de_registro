// Función para manejar el registro
function handleRegister(event) {
    event.preventDefault(); // Previene el envío del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    // Guardar los datos en localStorage (simulación)
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    localStorage.setItem("contraseña", contraseña);

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "login.html"; // Redirige a la página de inicio de sesión
}

// Función para manejar el inicio de sesión
function handleLogin(event) {
    event.preventDefault(); // Previene el envío del formulario
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    // Verificar los datos almacenados
    const storedCorreo = localStorage.getItem("correo");
    const storedContraseña = localStorage.getItem("contraseña");

    if (correo === storedCorreo && contraseña === storedContraseña) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "bienvenida.html"; // Redirige a la página de bienvenida
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}
