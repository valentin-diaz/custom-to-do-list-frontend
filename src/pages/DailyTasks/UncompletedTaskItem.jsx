function UncompletedTaskItem({ task, completeTask, openTaskModal }) {
    return ( 
        <li className="task-item" onClick={(e) => {
            e.stopPropagation()    
            openTaskModal(task)    
        }}>
            <p>{task.title}</p>
            <p>{task.reported_hours}h</p>
            
            <button onClick={(e) => {
                e.stopPropagation()
                completeTask(task)
            }}>
                Completar
            </button>
        </li>
     );
}

export default UncompletedTaskItem;