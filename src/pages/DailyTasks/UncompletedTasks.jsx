import { deleteTask, putTaskComplete, putTaskHours } from "../../api-calls";
import { useModal } from "../../contexts/ModalContext";
import TaskModal from "./TaskModal";
import UncompletedTaskItem from "./UncompletedTaskItem";

function UncompletedTasks({ tasks, setReload }) {
    const { showModal, closeModal } = useModal();
    
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
            <h3>Pendientes</h3>
            <ul className="uncompleted-tasks-list task-list">
                {tasks.map((task) => (
                    <UncompletedTaskItem 
                        task={task} 
                        completeTask={markAsComplete} 
                        openTaskModal={openTaskModal} 
                        key={task.id}  
                    />
                ))}
            </ul>
        </div>
     );
}

export default UncompletedTasks;