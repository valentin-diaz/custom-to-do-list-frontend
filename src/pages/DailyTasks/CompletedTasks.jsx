import { putTaskUncomplete, putTaskHours, deleteTask } from "../../api-calls";
import TaskModal from "./TaskModal";
import CompletedTaskItem from "./CompletedTaskItem";

function CompletedTasks({ tasks, setReload, showModal, closeModal }) {
    const markAsUncomplete = async (task) => {
        console.log(`Marcando ${task.title} como incompleta...`)

        const { data, error } = await putTaskUncomplete(task.id);
        if (data) {
            console.log(data.data)
            setReload(prev => prev + 1)
        }
        if (error) {
            console.log(error)
        }
    }

    const openTaskModal = (task) => {
        showModal(
            <TaskModal 
                task={task} 
                reportHours={reportHours}
                deleteTask={removeTask}
            />
        )
    }

    const reportHours = async (task, hours) => {
        const { data, error } = await putTaskHours(task.id, hours);

        if (data) {
            console.log(data)
            setReload(prev => prev + 1)
            closeModal()
        }
        if (error) {
            console.log(error)
        }
    }

    const removeTask = async (task) => {
        const { data, error } = await deleteTask(task.id);

        if (data) {
            console.log(data)
            setReload(prev => prev + 1)
            closeModal()
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
                    <CompletedTaskItem 
                        task={task} 
                        uncompleteTask={markAsUncomplete} 
                        openTaskModal={openTaskModal} 
                        key={task.id} 
                    />
                ))}
            </ul>
        </div>
     );
}

export default CompletedTasks;