import { useEffect, useState } from "react";
import { getDailyTasks } from "../../api-calls";
import TaskList from "./TaskList";
import "./DailyTasks.css";
import NewTaskForm from "./NewTaskForm";
import Modal from "../../components/Modal";
import { ModalProvider } from "../../contexts/ModalContext";
import { useReload } from "../../contexts/ReloadContext";

function DailyTasks() {
    const [tasks, setTasks] = useState([]);
    // const [reload, setReload] = useState(0);
    const { reloadCounter, setReload } = useReload();


    // Obtener tareas desde la API
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
    }, [reloadCounter]);
    
    return ( 
        <div className="daily-tasks-wrapper">
            <h1>Tareas para hoy</h1>
            <ModalProvider>
                <TaskList tasks={tasks} setReload={setReload} />
                <NewTaskForm setReload={setReload}/>

                <Modal/>

            </ModalProvider>
        </div>
     );
}

export default DailyTasks;