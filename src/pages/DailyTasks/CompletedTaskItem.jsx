import { BiCheck } from "react-icons/bi";

function CompletedTaskItem({ task, uncompleteTask, openTaskModal }) {
    return ( 
        <li className="task-item completed" onClick={(e) => {
            e.stopPropagation();
            openTaskModal(task);
        }}>
            <p className="task-item-title">{task.title}</p>
            <p>{task.reported_hours}h</p>

            <div className="button-container">
                <button className="complete-task-button" onClick={(e) => {
                    e.stopPropagation();
                    uncompleteTask(task)
                }}>
                    <BiCheck size={26}/>
                </button>
            </div>
        </li>
     );
}

export default CompletedTaskItem;