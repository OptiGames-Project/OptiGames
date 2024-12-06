document.addEventListener('DOMContentLoaded', () => {
    // Datos del changelog
    const changelog = [
        { date: '2024-12-05', changes: 'Mejora de la interfaz de usuario y corrección de errores menores.' },
        { date: '2024-11-20', changes: 'Actualización del sistema de autenticación para mayor seguridad.' },
        { date: '2024-10-10', changes: 'Lanzamiento inicial del sitio web con funcionalidades básicas.' },
        { date: '2024-12-05', changes: 'Se agregó la función ZPC.' }
    ];

    const changelogContainer = document.getElementById('changelog');

    // Crear elementos para cada entrada del changelog
    changelog.forEach(entry => {
        const changeItem = document.createElement('div');
        changeItem.classList.add('change-item');
        changeItem.innerHTML = `<strong>${entry.date}</strong>: ${entry.changes}`;
        changelogContainer.appendChild(changeItem);
    });

    // Alternar entre modo claro y oscuro
    const toggleDarkMode = document.getElementById('toggleDarkMode');
    toggleDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
