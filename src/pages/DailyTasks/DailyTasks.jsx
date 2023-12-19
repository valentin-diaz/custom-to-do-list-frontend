import { useEffect, useState } from "react";
import { getDailyTasks } from "../../api-calls";
import TaskList from "./TaskList";
import "./DailyTasks.css";
import NewTaskForm from "./NewTaskForm";
import Modal from "../../components/Modal";

function DailyTasks() {
    const [tasks, setTasks] = useState([]);
    const [reload, setReload] = useState(0);
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);

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
    }, [reload]);

    // Manejo del Modal
    const showModal = (content) => {
        setModalContent(content);
        setModal(true);
    }

    useEffect(() => {
        const keyDownHandler = event => {
          console.log('User pressed: ', event.key);
    
          if (event.key === 'Escape') {
            event.preventDefault();
            setModal(false)
          }
        };
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);
    
    return ( 
        <div className="daily-tasks-wrapper">
            <h1>Tareas para hoy</h1>
            
            <TaskList tasks={tasks} setReload={setReload} showModal={showModal} />
            <NewTaskForm setReload={setReload}/>

            <Modal
                openModal={modal}
                closeModal={() => {
                    setModal(false)
                }}
            >
                {modalContent}
            </Modal>
        </div>
     );
}

export default DailyTasks;