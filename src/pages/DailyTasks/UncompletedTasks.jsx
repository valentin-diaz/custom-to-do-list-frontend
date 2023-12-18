import { putTaskComplete } from "../../api-calls";
import UncompletedTaskItem from "./UncompletedTaskItem";

function UncompletedTasks({ tasks, setReload }) {
    const markAsComplete = async (task) => {
        console.log(`Marcando ${task.title} como completa...`)

        const { data, error } = await putTaskComplete(task.id);
        if (data) {
            console.log(data.data)
            setReload(prev => prev + 1)
        }
        if (error) {
            console.log(error)
        }
    }
    
    return ( 
        <div className="uncompleted-tasks task-list-container">
            <h3>No completas</h3>
            <ul className="uncompleted-tasks-list task-list">
                {tasks.map((task) => (
                    <UncompletedTaskItem task={task} completeTask={markAsComplete} key={task.id} />
                ))}
            </ul>
        </div>
     );
}

export default UncompletedTasks;