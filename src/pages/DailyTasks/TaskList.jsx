import { useModal } from "../../contexts/ModalContext";
import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";

function TaskList({ tasks, setReload }) {
    const { showModal, closeModal } = useModal();
    
    return ( 
        <>
            <UncompletedTasks 
                tasks={tasks.filter(task => !task.is_complete)} setReload={setReload} showModal={showModal} closeModal={closeModal}
            />
            <CompletedTasks 
                tasks={tasks.filter(task => task.is_complete)} setReload={setReload} showModal={showModal} closeModal={closeModal}
            />   
        </>
     );
}

export default TaskList;