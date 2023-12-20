import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";

function TaskList({ tasks, setReload, showModal, closeModal }) {
    return ( 
        <>
            <UncompletedTasks 
                tasks={tasks.filter(task => !task.is_complete)} setReload={setReload} showModal={showModal} closeModal={closeModal}
            />
            <CompletedTasks 
                tasks={tasks.filter(task => task.is_complete)} setReload={setReload}
            />   
        </>
     );
}

export default TaskList;