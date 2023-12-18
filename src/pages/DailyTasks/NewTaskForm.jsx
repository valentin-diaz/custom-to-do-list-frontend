import { useState } from "react";
import { postTask } from "../../api-calls";

function NewTaskForm() {
    const [taskData, setTaskData] = useState({
        title: '',
        category: 'Leer'
    })
    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('Agregando tarea')
        console.log(taskData)
        const { data, error } = await postTask(taskData.title, taskData.category);

        if (data) {
            console.log('Tarea creada')
        }

        if (error) {
            console.log('Error')
        }
    }
    
    return ( 
        <>
            <h2>Agregar tarea</h2>
            <form>
                <input type="text" value={taskData.title} placeholder="Nombre..." onChange={(e) => setTaskData({...taskData, title: e.target.value})} />
                <button type="submit" onClick={onSubmit}>Agregar</button>
            </form>
        </>
     );
}

export default NewTaskForm;