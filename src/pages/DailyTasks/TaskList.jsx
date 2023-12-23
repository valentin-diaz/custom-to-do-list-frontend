import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";

function TaskList({ tasks }) {
    return ( 
        <>
            <UncompletedTasks 
                tasks={tasks.filter(task => !task.is_complete)}
            />
            <CompletedTasks 
                tasks={tasks.filter(task => task.is_complete)}
            />   
        </>
     );
}

export default TaskList;