import { useEffect, useState } from "react";
import { getDailyTasks } from "../../api-calls";
import TaskList from "./TaskList";
import "./DailyTasks.css";

function DailyTasks() {
    const [tasks, setTasks] = useState([]);
    const [reload, setReload] = useState(0);

    useEffect(() => {
        const callGetTasks = async () => {
            const { data, error } = await getDailyTasks()

            if (data) {
                console.log(data.data)
                setTasks(data.data)
            }

            if (error) {
                console.log(error)
            }
        }

        callGetTasks();
    }, [reload]);
    
    return ( 
        <>
            <h1>Tareas para hoy</h1>
            <TaskList tasks={tasks} setReload={setReload} />
        </>
     );
}

export default DailyTasks;