function CompletedTaskItem({ task, uncompleteTask, openTaskModal }) {
    return ( 
        <li className="task-item">
            <p>{task.title}</p>
            <p>{task.reported_hours}h</p>
            <button onClick={() => openTaskModal(task)}>Ver tarea</button>
            <button onClick={() => uncompleteTask(task)}>Des-completar</button>
        </li>
     );
}

export default CompletedTaskItem;