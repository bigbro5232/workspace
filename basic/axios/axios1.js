const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => {
    const url = 'news.json';
    axios.get(url)
        .then((response) => {
            const newsItem = response.data.item;
            console.log(newsItem);
            const result = document.querySelector('#newsContainer');
            result.innerHTML = `
                <a href='${newsItem.link}' target='_blank'>
                <h2>${newsItem.title}</h2><a/>
                <h3>${newsItem.author}</h3>
                <h3>${newsItem.link}</h3>
            `
        })
        .catch((err) => {
            alert(err);
        })
})