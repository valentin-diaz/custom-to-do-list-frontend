function UncompletedTaskItem({ task, completeTask, reportHours }) {
    return ( 
        <li className="task-item">
            <p>{task.title}, {task.reported_hours}h</p>
            {/* <button onClick={() => reportHours(task)}>Completar</button> */}
            <input type="number" />
            <button onClick={() => completeTask(task)}>Completar</button>
        </li>
     );
}

export default UncompletedTaskItem;