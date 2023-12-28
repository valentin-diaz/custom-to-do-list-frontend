function CompletedTaskItem({ task, uncompleteTask, openTaskModal }) {
    return ( 
        <li className="task-item" onClick={(e) => {
            e.stopPropagation();
            openTaskModal(task);
        }}>
            <p>{task.title}</p>
            <p>{task.reported_hours}h</p>

            <button onClick={(e) => {
                e.stopPropagation()
                openTaskModal(task)
            }}>
                Ver tarea
            </button>

            <button onClick={(e) => {
                e.stopPropagation();
                uncompleteTask(task)
            }}>
                Des-completar
            </button>
        </li>
     );
}

export default CompletedTaskItem;