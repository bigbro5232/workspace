const id = document.querySelector('#id');
function remove() {
    if (id.value) {
        alert('Id Error');
        id.focus();
        return;
    }
    const url = `https://reqres.in/api/users/${id.value}`;
    console.log(url);
    fetch(url, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.status === 204) {
                const result = document.querySelector('#result');
                result.innerHTML = `
            <h2>회원정보가 성공적으로 삭제되었습니다.</h2>
            `
            } else {
                throw new Error(`응답코드 : ${response.status}`)
            }
        })
        .catch((err) => {
            alert(err);
        })
}