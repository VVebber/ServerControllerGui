import axios from "axios";

const path = "http://localhost:3000/adapter/";

export async function getAdapter()
{
    try {
        const response = await axios.get(path);
        return response.data; 
    } catch (error) {
        console.error(error);
        return "404"; 
    }
}