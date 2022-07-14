import axios from "axios";



export const getEntries = async (payload) => {

    const url = `/api/${payload.type}`;

    const res = await axios.get(url);

    return res.data
}