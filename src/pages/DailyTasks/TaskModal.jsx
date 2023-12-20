function TaskModal({ task }) {
    return ( 
        <div className="task-modal">
            <h1>{task.title}</h1>
            <p>{task.reported_hours} horas invertidas</p>
            <input type="number" />
            <button>Reportar horas</button>
        </div>
     );
}

export default TaskModal;