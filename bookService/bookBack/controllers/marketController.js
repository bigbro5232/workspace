// marketController.js
async function showData() {
    try {
        const response = await fetch('http://localhost:3000/markets');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching market data:', error);
    }
}

function displayData(data) {
    const marketDataDiv = document.querySelector('#market-data');
    marketDataDiv.innerHTML = ''; // 기존 내용을 초기화
    data.features.forEach(market => {
        marketDataDiv.innerHTML += `<p>이름: ${market.attributes.name}, 주소: ${market.attributes.roadaddr}, 전화번호: ${market.attributes.tel}, 기간: ${market.attributes.period}, 홈페이지: ${market.attributes.hmpg_addr}</p>`;
    });
}
document.addEventListener('DOMContentLoaded', showData);
