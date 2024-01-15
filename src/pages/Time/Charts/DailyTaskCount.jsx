import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    TimeScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import 'chartjs-adapter-date-fns';

import { Line } from 'react-chartjs-2';

import { defaults } from 'chart.js';

defaults.font.family = 'Poppins'
defaults.color = '#000000'

ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            type: 'time',
        }
    },
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
        <div className='chart-container daily-task-count-plot shadow'>
            <div className="chart-padding">
                <Line options={options} data={data}/> 
            </div>
        </div>
    );
}

export default DailyTaskCount;