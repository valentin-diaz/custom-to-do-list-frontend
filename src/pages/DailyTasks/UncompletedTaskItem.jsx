function UncompletedTaskItem({ task, completeTask }) {
    return ( 
        <li>
            <p>{task.title}</p>
            <button onClick={() => completeTask(task)}>Completar</button>
        </li>
     );
}

export default UncompletedTaskItem;