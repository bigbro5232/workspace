const { response } = require("express");

const baseUrl = `http://localhost:3333`;
const init = () => {
    const btnAll = document.querySelector('#btnAll');
    btnAll.onclick = async () => {
        const url = baseUrl + '/books'
        try {
            const res = await fetch(url);
            // alert(res.status);
            const data = await res.json();
            const { title, publish, price, isbn } = data;
            const result = document.querySelector('#result');
            result.innerHTML = `
                <tr>
                    <td style="width: 20%">${title}</td>
                    <td style="width: 20%">${publish}</td>
                    <td style="width: 20%">${price}</td>
                    <td style="width: 20%">${isbn}</td>
                </tr>
            `
        } catch (err) {
            alert(err);
        }
    }
}
document.addEventListener('DOMContentLoaded', init);