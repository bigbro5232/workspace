const display = 20;
let start = 1;
const baseUrl = 'http://localhost:3333/naver/search/books';

function init() {
    const btnSearch = document.querySelector('#btnSearch');
    const input = document.querySelector('#keyword');
    input.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            const query = document.querySelector('#keyword').value;
            if (!query) {
                alert('검색어를 입력하세요.');
                document.querySelector('#keyword').focus();
                return;
            }
            const url = `${baseUrl}?query=${query}&diplay=${display}&start=${start}`;
            // console.log(url);

            send(url, query, 1);
        }
    })
    btnSearch.addEventListener('click', () => {
        const query = document.querySelector('#keyword').value;
        if (!query) {
            alert('검색어를 입력하세요.');
            document.querySelector('#keyword').focus();
            return;
        }
        const url = `${baseUrl}?query=${query}&diplay=${display}&start=${start}`;
        // console.log(url);

        send(url, query, 1);

    });
}
async function send(url, query, page) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // alert(JSON.stringify(data));
        showList(data, query); //데이터 보여주기
        showPage(data, query, page); // 페이지 네비게이션 분리

        // document.querySelector('#result').innerHtml = JSON.stringify(data);
    } catch (err) {
        alert('Fetch Error: ' + err);
    }
}

function showPage(data, query, page) {
    let { total } = data;

    // let start = (page - 1) * display + 1;
    console.log(page, start, display);

    // 검색결과 200개로 제한
    if (total > 200) {
        total = 200;
    }
    let pageCount = Math.ceil(total / display);
    let str = `<ul class="pagination">`
    for (let i = 1; i <= pageCount; i++) {
        let start = (i - 1) * display + 1
        if (i == page) {
            str += `<li class="page-item active">`
        } else {
            str += `<li class"page-item"`
        }
        str += `<a class="page-link" href="#" 
                onclick="fetchData('${query}','${start}','${i}')">${i}</a>
            </li>`
    }

    str += `</ul>`
    document.querySelector('#pageNavi').innerHTML = str;
}

function fetchData(query, start, page) {
    let url = `${baseUrl}?query=${query}&display=${display}&start=${start}`;
    send(url, query, page);
    // console.log(send);
}

function showList(data, query) {
    const { total, display, start, items } = data;
    let str = `<h2>검색어: ${query} 검색 결과 ${total} 개</h2>`
    str += `
        <table class="table">
            <tr>
    `
    items.forEach((book, i) => {
        str += `<td width="20%" style="text-align:center">
            <a href="${book.link}" target="_blank">
                <img src="${book.image}" class="img-thumbnail"
                style="width:70%">
            </a>
            <h5>${book.title}</h5>
            <p>
                저  자: ${book.author}<br>
                출판사: ${book.publisher}<br>
            </p>
        </td>`
        if (i % 5 == 4) {
            str += `</tr><tr>`
        }
    })
    str += `</tr>
    </table>
    `
    document.querySelector('#result').innerHTML = str;
}
document.addEventListener('DOMContentLoaded', init);