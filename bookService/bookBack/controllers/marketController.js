// marketController.js
let Page = 1;
const items = 5;

showData = async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/markets');
        const data = await response.json();
        displayData(data, currentPage);
        setupPage(data);
    } catch (error) {
        console.error('Error: ', error);
    }
}

function displayData(data, page) {
    const marketDiv = document.querySelector('#result');
    marketDiv.innerHTML = ''; // 기존 내용을 초기화

    // 테이블 생성
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>전화번호</th>
            <th>기간</th>
            <th>홈페이지</th>
        </tr>
    `;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = data.slice(start, end);

    pageData.forEach(market => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${market.id}</td>
            <td><a href="#" onclick="showDetail(${market.id})">${market.name}</a></td>
            <td>${market.roadaddr}</td>
            <td>${market.tel}</td>
            <td>${market.period}</td>
            <td>${market.hmpg_addr}</td>
        `;
        table.appendChild(row);
    });

    marketDiv.appendChild(table);
}

function setupPage(data) {
    const paginationDiv = document.querySelector('#pagination');
    paginationDiv.innerHTML = ''; // 기존 내용을 초기화

    const pageCount = Math.ceil(data.length / itemsPerPage);
    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            currentPage = i;
            displayData(data, currentPage);
        });
        paginationDiv.appendChild(button);
    }
}

async function showDetail(id) {
    try {
        const response = await fetch(`http://localhost:3000/markets/${id}`);
        const market = await response.json();
        displayDetail(market);
    } catch (error) {
        console.error('Error: ', error);
    }
}

function displayDetail(market) {
    const detailDiv = document.querySelector('#detail');
    detailDiv.innerHTML = `
        <h2>상세보기</h2>
        <p><strong>번호:</strong> ${market.id}</p>
        <p><strong>이름:</strong> ${market.name}</p>
        <p><strong>주소:</strong> ${market.roadaddr}</p>
        <p><strong>전화번호:</strong> ${market.tel}</p>
        <p><strong>기간:</strong> ${market.period}</p>
        <p><strong>홈페이지:</strong> ${market.hmpg_addr}</p>
    `;
}

document.addEventListener('DOMContentLoaded', showData);
