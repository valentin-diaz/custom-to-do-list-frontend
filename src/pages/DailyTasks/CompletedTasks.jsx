import { putTaskUncomplete } from "../../api-calls";
import CompletedTaskItem from "./CompletedTaskItem";

function CompletedTasks({ tasks, setReload }) {
    const markAsUncomplete = async (task) => {
        console.log(`Marcando ${task.title} como completa...`)

        const { data, error } = await putTaskUncomplete(task.id);
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
            <h3>Completadas</h3>
            <ul className="uncompleted-tasks-list task-list"> 
                {tasks.map((task) => (
                    <CompletedTaskItem task={task} uncompleteTask={markAsUncomplete} key={task.id} />
                ))}
            </ul>
        </div>
     );
}

export default CompletedTasks;