import { useEffect, useState } from "react";

function TaskModal({ task, reportHours, updateTitle, deleteTask }) {
    const [editableData, setEditableData] = useState({
        title: task.title,
        category: task.category,
        hours: task.reported_hours
    })

    useEffect(() => {
        setEditableData({
            title: task.title,
            category: task.category,
            hours: task.reported_hours
        })
    }, [task]);

    const onSubmitTitle = async (e) => {
        e.preventDefault();
        updateTitle(task, editableData.title)
    }

    const onSubmitHours = async (e) => {
        e.preventDefault();
        console.log('cambio en las horas')
        reportHours(task, editableData.hours)
    }
    
    return ( 
        <div className="task-modal">
            <form onSubmit={onSubmitTitle}>
                <input 
                    type="text" 
                    value={editableData.title}
                    onChange={(e) => setEditableData({...editableData, title: e.target.value})}
                    className="task-title-input title"
                />
            </form>
    
            <p>({task.category})</p>
            <br />
            <p>{task.reported_hours} horas invertidas</p>
            <form >
                <input type="number" value={editableData.hours} onChange={(e) => setEditableData({...editableData, hours: e.target.value})}/>
                <button type="submit" onClick={onSubmitHours}>Reportar horas</button>
            </form>
            <button onClick={() => deleteTask(task)}>Eliminar tarea</button>
        </div>
     );
}

export default TaskModal;