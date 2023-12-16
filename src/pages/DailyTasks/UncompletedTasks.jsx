function UncompletedTasks({ tasks }) {
    return ( 
        <div className="uncompleted-tasks">
            <h3>No completas</h3>
            <ul>
                {tasks.map((task) => (<li>{task.title}</li>))}
            </ul>
        </div>
     );
}

export default UncompletedTasks;