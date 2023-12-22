import { useModal } from "../../contexts/ModalContext";
import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";

function TaskList({ tasks, setReload }) {
    const { showModal, closeModal } = useModal();

    return ( 
        <>
            <UncompletedTasks 
                tasks={tasks.filter(task => !task.is_complete)} setReload={setReload}
            />
            <CompletedTasks 
                tasks={tasks.filter(task => task.is_complete)} setReload={setReload}
            />   
        </>
     );
}

export default TaskList;