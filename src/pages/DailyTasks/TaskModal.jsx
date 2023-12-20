import { useState } from "react";

function TaskModal({ task, reportHours }) {
    const [ hours, setHours ] = useState(0);
    
    return ( 
        <div className="task-modal">
            <h1>{task.title}</h1>
            <p>{task.reported_hours} horas invertidas</p>
            <input type="number" value={hours} onChange={(e) => setHours(e.target.value)}/>
            <button onClick={() => reportHours(task, hours)}>Reportar horas</button>
        </div>
     );
}

export default TaskModal;