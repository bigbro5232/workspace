import axios from 'https://cdn.skypack.dev/axios';

async function getNews(urlProxy) {
    try {
        const res = await axios.get(urlProxy, { params: { count: 15 } })
        return res.data;
    } catch (err) {
        alert(err);
    }
}

export { getNews }