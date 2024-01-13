import { useEffect, useState } from "react";
import "./Time.css"
import { getDashboard } from "../../api-calls";
import TimePerCategory from "./Charts/TimePerCategory";
import TasksPerCategory from "./Charts/TasksPerCategory";
import DaysWithTaskCreated from "./Cards/DaysWithTaskCreated";
import TaskCompletion from "./Cards/TaskCompletion";
import DailyTaskCount from "./Charts/DailyTaskCount";

function Time() {
    const [dashboardData, setDashboardData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getDashboardData = async () => {
            const { data, error } = await getDashboard();

            if (data) {
                console.log(data.data)
                setDashboardData(data.data)
            }

            if (error) {
                console.log(error)
            }
            setIsLoading(false)
        }

        getDashboardData();
    }, []);

    if (isLoading) {
        return (
            <h1>Cargando...</h1>
        )
    }
    
    return ( 
        <div className="time-wrapper">
            <h1 className="title">Tiempo</h1>
            <div className="dashboard">
                <TimePerCategory labels={dashboardData.timePerCategoryPlot.map((i) => i.category)} values={dashboardData.timePerCategoryPlot.map((i) => i.sum)}/>
                <TasksPerCategory labels={dashboardData.tasksPerCategoryPlot.map((i) => i.category)} values={dashboardData.tasksPerCategoryPlot.map((i) => i.count)} />
                <DaysWithTaskCreated />
                <TaskCompletion />
                <DailyTaskCount labels={dashboardData.dailyTaskCountPlot.map((i) => i.createdat.split('T')[0])} values={dashboardData.dailyTaskCountPlot.map((i) => i.count)} />
                <div>hola</div>
                <div>hola</div>
                <div>hola</div>
            </div>
            
        </div>
     );
}

export default Time;