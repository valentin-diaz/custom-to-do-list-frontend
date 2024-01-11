import { useEffect, useState } from "react";
import "./Time.css"
import { getDashboard } from "../../api-calls";
import TimePerCategory from "./Charts/TimePerCategory";

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
                {/* <TimePerCategory labels={dashboardData.timePerCategoryPlot.map((i) => i.category)} values={dashboardData.timePerCategoryPlot.map((i) => i.sum)}/> */}
                <div>hola</div>
                <div>hola</div>
                <div>hola</div>
                <div>hola</div>
            </div>
            
        </div>
     );
}

export default Time;