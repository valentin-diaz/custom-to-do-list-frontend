import CompletedTaskItem from "./CompletedTaskItem";

function CompletedTasks({ tasks }) {
    return ( 
        <div className="completed-tasks">
            <h3>Completadas</h3>
            <ul>
                {tasks.map((task) => (
                    <CompletedTaskItem task={task} key={task.id} />
                ))}
            </ul>
        </div>
     );
}

export default CompletedTasks;