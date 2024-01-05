function UncompletedTaskItem({ task, completeTask, openTaskModal }) {
    return ( 
        <li className="task-item" onClick={(e) => {
            e.stopPropagation()    
            openTaskModal(task)    
        }}>
            <p>{task.title}</p>
            <p>{task.reported_hours}h</p>
            
            <div className="button-container">
                <button className="complete-task-button" onClick={(e) => {
                    e.stopPropagation()
                    completeTask(task)
                }}>
                    
                </button>
            </div>
        </li>
     );
}

export default UncompletedTaskItem;