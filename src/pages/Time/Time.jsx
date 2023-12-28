import { useEffect, useState } from "react";
import "./Time.css"
import { getDashboard } from "../../api-calls";

function Time() {
    const [dashboardData, setDashboardData] = useState({})

    useEffect(() => {
        const getDashboardData = async () => {
            const { data, error } = await getDashboard();

            if (data) {
                console.log(data.data)
            }

            if (error) {
                console.log(error)
            }
        }

        getDashboardData();
    }, []);
    
    return ( 
        <div className="time-wrapper">
            <h1 className="title">Tiempo</h1>
        </div>
     );
}

export default Time;