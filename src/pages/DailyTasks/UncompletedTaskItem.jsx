function UncompletedTaskItem({ task, completeTask, openHoursModal }) {
    return ( 
        <li className="task-item">
            <p>{task.title}, {task.reported_hours}h</p>
            <button onClick={() => openHoursModal(task)}>Reportar horas</button>
            <button onClick={() => completeTask(task)}>Completar</button>
        </li>
     );
}

export default UncompletedTaskItem;