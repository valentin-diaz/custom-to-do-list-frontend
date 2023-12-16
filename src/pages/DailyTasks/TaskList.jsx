import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";

function TaskList({ tasks, setReload }) {
    return ( 
        <>
            <h1>Lista de tareas</h1>
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