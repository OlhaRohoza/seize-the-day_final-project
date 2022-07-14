import axios from "axios";



export const getEntries = async (payload) => {

    if (payload.type === 'all') {

        let url = `/api/${payload.type}`;
        const res = await axios.get(url);
        return res.data;

    } else if (payload.type === 'year') {

        let url = `/api/${payload.type}/${payload.value}`;
        const res = await axios.get(url);
        return res.data;

    } else if (payload.type === 'month') {
        let url = `/api/${payload.type}/${payload.value}`;
        const res = await axios.get(url);
        return res.data;
    }


}