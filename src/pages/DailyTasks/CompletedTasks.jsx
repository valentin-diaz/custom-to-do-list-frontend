function CompletedTasks({ tasks }) {
    return ( 
        <div className="completed-tasks">
            <h3>Completadas</h3>
            <ul>
                {tasks.map((task) => (<li>{task.title}</li>))}
            </ul>
        </div>
     );
}

export default CompletedTasks;