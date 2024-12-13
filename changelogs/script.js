document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const previousEntries = document.querySelectorAll('.previous');

    toggleButton.addEventListener('click', function () {
        previousEntries.forEach(entry => {
            if (entry.classList.contains('hidden')) {
                entry.classList.remove('hidden');
                toggleButton.textContent = 'Ocultar versiones anteriores';
            } else {
                entry.classList.add('hidden');
                toggleButton.textContent = 'Mostrar versiones anteriores';
            }
        });
    });
});
