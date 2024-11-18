var btnEnviar = document.getElementById('btnEnviar');

if (btnEnviar) {
    btnEnviar.addEventListener('click', function () {
        var alertBox = document.createElement('div');
        alertBox.className = 'alert alert-success alert-dismissible fade show';
        alertBox.role = 'alert';
        alertBox.innerHTML = 'Gracias por su consulta. Nos pondremos en contacto con usted a la brevedad.';

        var closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'btn-close';
        closeButton.setAttribute('data-bs-dismiss', 'alert');
        closeButton.setAttribute('aria-label', 'Cerrar');

        alertBox.appendChild(closeButton);
        document.body.appendChild(alertBox);

        // Limpiar los campos del formulario
        var consultaForm = document.getElementById('consultaForm');
        if (consultaForm) {
            consultaForm.reset();
        }
    });
}
