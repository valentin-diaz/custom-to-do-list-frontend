import { useState } from "react";

function TaskModal({ task, reportHours, deleteTask }) {
    const [ hours, setHours ] = useState(0);

    const onSubmit = async (e) => {
        e.preventDefault();
        reportHours(task, hours)
    }
    
    return ( 
        <div className="task-modal">
            <h1>{task.title}</h1>
            <p>{task.reported_hours} horas invertidas</p>
            <form >
                <input type="number" value={hours} onChange={(e) => setHours(e.target.value)}/>
                <button type="submit" onClick={onSubmit}>Reportar horas</button>
            </form>
            <button onClick={() => deleteTask(task)}>Eliminar tarea</button>
        </div>
     );
}

export default TaskModal;