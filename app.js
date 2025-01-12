window.onload = function() {
    // Arreglos con las diferentes partes de la excusa
    const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi loro'];
    const action = ['se comió', 'orino', 'rompió', 'perdió'];
    const what = ['mi tarea', 'mi teléfono', 'el coche', 'el ordenador'];
    const when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];

    // Función para generar una excusa aleatoria
    function generateExcuse() {
        const randomWho = who[Math.floor(Math.random() * who.length)];
        const randomAction = action[Math.floor(Math.random() * action.length)];
        const randomWhat = what[Math.floor(Math.random() * what.length)];
        const randomWhen = when[Math.floor(Math.random() * when.length)];

        return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    }

    // Asignar la excusa al HTML cuando se carga la página
    document.getElementById('excuse').innerHTML = generateExcuse();
};
