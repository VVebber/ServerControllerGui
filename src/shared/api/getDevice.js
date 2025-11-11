import axios from "axios";

const path = "http://localhost:3000/device/";

export async function getDevice()
{
    try {
        const response = await axios.get(path);
        return response.data; 
    } catch (error) {
        console.error(error);
        return "404"; 
    }
}