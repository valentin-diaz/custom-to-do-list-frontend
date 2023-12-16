function CompletedTaskItem({ task }) {
    return ( 
        <li>
            <p>{task.title}</p>
            <button>Des-completar</button>
        </li>
     );
}

export default CompletedTaskItem;