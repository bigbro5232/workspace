const btn1 = document.querySelector('#btn1');
const result = document.querySelector('#result')
const url = 'singleUser.json';

btn1.onclick = () => {
    userInfo(url);
}

const userInfo = (url) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('요청이 잘못됬거나 네트워크에 문제가 있습니다.');
            }
            return response.json() //json.pares(xhr.responseText)
        })
        .then((data) => {
            renderUi(data);
        })
        .catch((err) => {
            alert(err)
        })
    const renderUi = (data) => {
        const { id, email, first_name, last_name, avatar } = data.data;
        result.innerHTML = `
        <h2>회원 정보</h2>
        <img src='${avatar}'>
        <h3>Id: ${id}</h3>
        <h3>Name: ${first_name} ${last_name}</h3>
        <h3>Email: ${email}</h3>
        `
    }

}

