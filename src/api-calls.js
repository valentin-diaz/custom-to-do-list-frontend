import axios from "axios";

export const getDailyTasks = async () => {
    console.log('GET')
    try {
        const response = await axios.get('http://localhost:5000/tasks');

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