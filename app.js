window.onload = function() {
    const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi loro'];
    const action = ['se comió', 'orino', 'rompió', 'perdió'];
    const what = ['mi tarea', 'mi teléfono', 'el coche', 'el ordenador'];
    const when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];


    function generateExcuse() {
        const randomWho = who[Math.floor(Math.random() * who.length)];
        const randomAction = action[Math.floor(Math.random() * action.length)];
        const randomWhat = what[Math.floor(Math.random() * what.length)];
        const randomWhen = when[Math.floor(Math.random() * when.length)];

        return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    }

    document.getElementById('excuse').innerHTML = generateExcuse();
};
