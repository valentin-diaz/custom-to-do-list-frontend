import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import { defaults } from 'chart.js';

defaults.font.family = 'Poppins'
defaults.color = '#000000'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tareas creadas por día',
        font: {
            size: 16
        }
      },
    },
};

function DailyTaskCount({ labels, values }) {
    const data = {
        labels,
        datasets: [
            {
                label: 'Tareas creadas',
                data: values,
                backgroundColor: '#49108B'
            }
        ]
    }
    
    return ( 
        <div className='chart-container time-per-category-plot shadow'>
            <div className="chart-padding">
                <Bar options={options} data={data}/> 
            </div>
        </div>
    );
}

export default DailyTaskCount;