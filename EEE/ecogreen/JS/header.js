// Funciones para abrir y cerrar modales
function openAddressModal() {
    document.getElementById('address-modal').style.display = 'block';
}

function closeAddressModal() {
    document.getElementById('address-modal').style.display = 'none';
}

function openLanguageModal() {
    document.getElementById('language-modal').style.display = 'block';
}

function closeLanguageModal() {
    document.getElementById('language-modal').style.display = 'none';
}

function openNotificationsModal() {
    document.getElementById('notifications-modal').style.display = 'block';
}

function closeNotificationsModal() {
    document.getElementById('notifications-modal').style.display = 'none';
}

function openUserModal() {
    document.getElementById('user-modal').style.display = 'block';
}

function closeUserModal() {
    document.getElementById('user-modal').style.display = 'none';
}

function submitAddress() {
    // Acción para enviar la dirección
    closeAddressModal();
}

function initiateSession() {
    // Acción para iniciar sesión
    alert('Iniciar sesión');
}