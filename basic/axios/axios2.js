const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

const url = 'https://www.hankyung.com/feed/it';
//서버요청 직접 보내기

const proxy_url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.hankyung.com%2Ffeed%2Fit&api_key=znjspe7vtkycnqo6eoggksne2yemlsrfmjt3t44w'
// 중간대리서버(proxy server)를 이용해서 요청을보내 응답을 받는다
// xml을 json으로 변화하여 웅답하여 보내준다

btn1.addEventListener('click', () => {
    axios.get(url)
        .then((res) => {
            alert(res);
        }).catch((err) => {
            alert(err);
        });
})

btn2.addEventListener('click', () => {
    axios.get(proxy_url, {
        params: { count: 20 }
    })
        .then((res) => {
            showNews(res.data);
        }).catch((err) => {
            alert(err);
        });
})
function showNews2(data) {
    const list = data.items; //배열
    // console.log(list.length);
    const result = document.querySelector('#newsContainer');
    let str = '<ul>';
    for (let i = 0; i < list.length; i++) {
        const item = list[i]
        // console.log(item);
        const { title, link, } = item;
        str += `
            <li>
                <a href = ${link} target = _blank>${title}</a>
            </li>
            `
    }
    str += '</ul>'
    result.innerHTML = str;
}

function showNews(data) {
    const list = data.items; //배열
    const pubDate = list[0].pubDate;
    document.querySelector('#today').innerText = pubDate;
    // console.log(list.length);
    const result = document.querySelector('#newsContainer');
    let str = '<ul>';
    const arr = list.map((item) => {
        const { title, link, } = item;
        return `
            <li>
                <a href = ${link} target = _blank>${title}</a>
            </li>
        `
    })
    const items = arr.join('')
    str += items
    str += '</ul>'
    result.innerHTML = str;
}