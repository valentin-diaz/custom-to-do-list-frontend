function CompletedTaskItem({ task, uncompleteTask }) {
    return ( 
        <li>
            <p>{task.title}</p>
            <button onClick={() => uncompleteTask(task)}>Des-completar</button>
        </li>
     );
}

export default CompletedTaskItem;