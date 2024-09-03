// book.js
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
            const result = document.querySelector('#result');
            result.innerHTML = ''; // 기존 내용을 초기화

            data.forEach(book => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.publish}</td>
                    <td>${book.price}</td>
                    <td>${book.publishDate}</td>
                    <td>
                        <button class="btn btn-warning btn-sm">수정</button>
                        <button class="btn btn-danger btn-sm">삭제</button>
                    </td>
                `;
                resultTable.appendChild(row);
            });
        } catch (err) {
            alert(err);
        }
    }
}
document.addEventListener('DOMContentLoaded', init);