import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";

function TaskList({ tasks, setReload, showModal }) {
    return ( 
        <>
            <UncompletedTasks 
                tasks={tasks.filter(task => !task.is_complete)} setReload={setReload} showModal={showModal}
            />
            <CompletedTasks 
                tasks={tasks.filter(task => task.is_complete)} setReload={setReload}
            />   
        </>
     );
}

export default TaskList;