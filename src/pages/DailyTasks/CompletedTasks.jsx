import { putTaskUncomplete, putTaskHours, deleteTask, putTaskTitle } from "../../api-calls";
import TaskModal from "./TaskModal";
import CompletedTaskItem from "./CompletedTaskItem";
import { useModal } from "../../contexts/ModalContext";
import { useReload } from "../../contexts/ReloadContext";

function CompletedTasks({ tasks }) {
    const { showModal, closeModal } = useModal();
    const { setReload } = useReload();
    
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
                updateTitle={updateTitle}
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

    const updateTitle = async (task, new_name) => {
        console.log('cambiando el titulo de la tarea')
        const { data, error } = await putTaskTitle(task.id, new_name);

        if (data) {
            console.log(data.data)
            setReload(prev => prev + 1)
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
            <h3 className="daily-tasks-subtitle">Completadas</h3>
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