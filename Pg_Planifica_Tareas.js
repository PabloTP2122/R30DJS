/* En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar,
eliminar y marcar como completadas las tareas, así como también mostrar un registro de las mismas.
Para ello, debes construir la lógica de la función closure llamada createTaskPlanner para que devuelva
los siguientes métodos:
addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas.
La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed,
donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
getTasks(): Devuelve el array de tareas.
getPendingTasks(): Devuelve solo las tareas pendientes.
getCompletedTasks(): Devuelve solo las tareas completadas.
markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad
(3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades
con las especificadas en el objeto updates. */
export function createTaskPlanner() {
    // Tu código aquí 👈
    let tasks = [];
    return {
        addTask: function(task) {
            task['completed'] = false;
            tasks.push(task);
            return tasks;
        },
        removeTask: function(value) {
            const taskToRemoveIndex = tasks.findIndex(item => item.id == value || item.name == value);
            // Mutando el array original
            tasks.splice(taskToRemoveIndex, 1);

        },
        getTasks: function() {
            return tasks;
        },
        getPendingTasks: function() {
            const pendingTasks = tasks.filter(task => task.completed === false);
            return pendingTasks;
        },
        getCompletedTasks: function() {
            const completedTasks = tasks.filter(task => task.completed === true);
            return completedTasks;
        },
        markTaskAsCompleted: function(value) {
            const taskCompleted = tasks.findIndex(item => item.id == value || item.name == value);
            return tasks[taskCompleted].completed = true;
        },
        getSortedTasksByPriority: function() {
            // Sin modificar el array original
            const clone = [...tasks];
            const sortedTasks = clone.sort((a, b) => a.priority - b.priority);
            return sortedTasks;
        },
        filterTasksByTag: function(tag) {
            const sortedTasksByTag = tasks.filter((task) => {
                return task.tags.includes(tag);
            });
            return sortedTasksByTag;
        },
        updateTask: function(taskId, updates) {
            const position = tasks.findIndex(item => item.id == taskId);
            const task = tasks[position];
            tasks[position] = {
                ...task,
                ...updates,
            }
        }
    }
}

const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});
planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["A"]
});
planner.addTask({
    id: 3,
    name: "Llamar a Okai",
    priority: 5,
    tags: ["B"]
});
planner.addTask({
    id: 4,
    name: "Llamar a mama",
    priority: 7,
    tags: ["C"]
});
planner.markTaskAsCompleted(1);
planner.markTaskAsCompleted(2);
planner.getTasks();
planner.getSortedTasksByPriority();
planner.filterTasksByTag('shopping');