import axios from "axios";

const BASE_URL = 'http://localhost:5000'

export const getDailyTasks = async () => {
    console.log('GET DAILY TASKS')
    try {
        const response = await axios.get(`${BASE_URL}/tasks`);

        return {
            data: response,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error
        }
    }
}

export const postTask = async (title, category) => {
    console.log('POST TASK')
    try {
        const response = await axios({
            method: 'POST',
            url: `${BASE_URL}/task`,
            data: { title, category},
        });

        return {
            data: response,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error
        }
    }
}

export const putTaskComplete = async (task_id) => {
    console.log('PUT TASK COMPLETE')
    try {
        const response = await axios.put(`${BASE_URL}/tasks/${task_id}/complete`);

        return {
            data: response,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error
        }
    }
}

export const putTaskUncomplete = async (task_id) => {
    console.log('PUT TASK COMPLETE')
    try {
        const response = await axios.put(`${BASE_URL}/tasks/${task_id}/uncomplete`);

        return {
            data: response,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error
        }
    }
}

export const putTaskHours = async (task_id, hours) => {
    console.log('PUT TASK HOURS')
    try {
        const response = await axios({
            method: 'PUT',
            url: `${BASE_URL}/tasks/${task_id}/report`,
            data: { reportedHours: hours },
        });

        return {
            data: response,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error
        }
    }
}

export const deleteTask = async (task_id) => {
    console.log('DELETE TASK')
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${BASE_URL}/tasks/${task_id}`,
        });

        return {
            data: response,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error
        }
    }
}