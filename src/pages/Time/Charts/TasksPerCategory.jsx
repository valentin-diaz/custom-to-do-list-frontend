import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Pie } from 'react-chartjs-2';

import { defaults } from 'chart.js';

defaults.font.family = 'Poppins'
defaults.color = '#000000'

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tareas por categoría',
        font: {
            size: 16
        }
      },
    },
};

function TasksPerCategory({ labels, values }) {
    const data = {
        labels,
        datasets: [
            {
                label: 'Tareas creadas',
                data: values,
                backgroundColor: [
                    '#49108B',
                    '#7E30E1',
                    '#E26EE5',
                    '#F6ECA9',
                    '#9AD0C2',
                    '#FF9843',
                    '#96EFFF',
                    '#ECF4D6',
                    '#E6B9DE'
                ]
            }
        ]
    }
    
    return ( 
        <div className='chart-container tasks-per-category-plot shadow'>
            <div className="chart-padding">
                <Pie options={options} data={data}/> 
            </div>
        </div>
    );
}

export default TasksPerCategory;