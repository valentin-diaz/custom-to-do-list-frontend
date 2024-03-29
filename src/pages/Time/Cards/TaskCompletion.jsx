function TaskCompletion({ completedTasks, totalTasks }) {
    return ( 
        <div className="chart-container shadow data-container">
                <h4>De las tareas creadas:</h4>
                <h1>{ (completedTasks / totalTasks * 100).toFixed(1) } %</h1>
                <h4>han sido completadas</h4>
        </div>
     );
}

export default TaskCompletion;