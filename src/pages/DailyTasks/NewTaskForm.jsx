import { useEffect, useState } from "react";
import { getCategories, postTask } from "../../api-calls";
import { useReload } from "../../contexts/ReloadContext";

function NewTaskForm() {
    const { setReload } = useReload();
    
    const [taskData, setTaskData] = useState({
        title: '',
        category: ''
    });
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const getTaskCategories = async () => {
            const { data, error } = await getCategories();

            if (data) {
                console.log('Categorias obtenidas')
                console.log(data.data)
                setCategories(data.data);
                setTaskData({...taskData, category: data.data[0]})
            }

            if (error) {
                console.log(error)
            }
        }    

        getTaskCategories()
    }, []);
    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('Agregando tarea')
        console.log(taskData)
        const { data, error } = await postTask(taskData.title, taskData.category);

        if (data) {
            console.log('Tarea creada')
            setTaskData({ title: '', category: 'Leer' })
            setReload(prev => prev + 1)
        }

        if (error) {
            console.log('Error')
        }
    }
    
    return ( 
        <>
            <h2 className="daily-tasks-subtitle">Agregar tarea</h2>
            <form className="new-task-form">
                <label htmlFor="title" className="form-label">
                    Nombre:
                </label>
                <input 
                    type="text" 
                    name="title"
                    value={taskData.title} 
                    placeholder="Nombre..." 
                    onChange={(e) => setTaskData({...taskData, title: e.target.value})} 
                    className="no-outline form-input"
                />
                

                <label htmlFor="category" className="form-label">
                    Categoría:
                </label>
                <select 
                    name="category" 
                    className="form-input"
                    id="category-select" 
                    value={taskData.category} 
                    onChange={e => setTaskData({...taskData, category: e.target.value})}
                >
                    {categories.map((c, idx) => (
                        <option value={c} key={idx}>{c}</option>
                    ))}
                </select>

                <button 
                    type="submit" 
                    onClick={onSubmit} 
                    className="btn btn-primary"
                >
                    Agregar
                </button>
            </form>
        </>
     );
}

export default NewTaskForm;