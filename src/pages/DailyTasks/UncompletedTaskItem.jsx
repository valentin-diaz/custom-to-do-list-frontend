function UncompletedTaskItem({ task, completeTask }) {
    return ( 
        <li className="task-item">
            <p>{task.title}</p>
            <button onClick={() => completeTask(task)}>Completar</button>
        </li>
     );
}

export default UncompletedTaskItem;