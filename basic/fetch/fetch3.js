const btn1 = document.querySelector('#btn1');
const result = document.querySelector('#result');

btn1.onclick = () => {
    const pageNo = prompt('조회할 페이지 번호를 입력하세요');
    if (!pageNo) {
        return;
    }
    let url = `https://reqres.in/api/users?page=${pageNo}`
    getAllUser(url);
}

const getAllUser = (url) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('데이터가 없거나 네트워크에 문제가 있습니다.');
            }
            return response.json() //json.pares(xhr.responseText)
        })
        .then((data) => {
            // alert(JSON.stringify(data));
            const { data: userList } = data;
            // console.log(page, per_page, total, total_pages, userList);
            // console.log(userList);
            if (userList.length === 0) {
                result.innerHTML = `<h2>요청한 페이지의 데이터가 없습니다.</h2>`
            } else {
                renderUi(data);
            }
        })
        .catch((err) => {
            alert(err)
        })
    const renderUi = (data) => {
        const { page, per_page, total, total_pages, data: userList } = data;
        let str = `<table class='table'>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        `
        for (let i = 0; i < userList.length; i++) {
            let user = userList[i]
            str += `
            <tr>
                <td>${user.id}</td>
                <td><img src='${user.avatar}'></td>
                <td>${user.first_name} ${user.last_name}</td>
                <td>${user.email}</td>
            </tr>
            `
        }
        str += `</table>`
        result.innerHTML = str;
    }
}
