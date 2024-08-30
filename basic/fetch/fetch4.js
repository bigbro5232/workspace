const result = document.querySelector('#result')
const paging = document.querySelector('#paging')

const getAllUser = (page, perPage) => {
    const url = `https://reqres.in/api/users?page=${page}&per_page=${perPage}`;
    fetch(url)
        .then((res) => {
            if (!res.ok) throw new Error('Error')
            return res.json();
        })
        .then((data) => {
            if (data.data.length === 0) {
                alert("No data");
            } else {
                renderUi(data)
            }
        })
}

const renderUi = (data) => {
    const { page, per_page, total, total_pages, data: userList } = data;
    // console.log(total);
    // console.log(per_page);
    // console.log(total_pages);

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

    let pageStr = '';
    for (let i = 1; i <= total_pages; i++) {
        pageStr += `<button onclick='getAllUser(${i},${per_page})'>${i}</button>`
    }
    result.innerHTML = str;
    paging.innerHTML = pageStr;
}