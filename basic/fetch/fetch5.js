function createUser() {
    // 서버에 submit하지 못하도록 기본동작 막음
    event.preventDefault();
    // 사용자가 입력한 값 받기 name, job
    // let name = document.querySelector('#name').value;
    const data = {
        name: frm.name.value,
        job: frm.job.value,
    }
    console.log(data);

    // 유효성 확인
    if (!data.name) {
        alert('Error');
        frm.name.focus();
        return;
    }
    if (!data.job) {
        alert('Error');
        frm.job.focus();
        return;
    }
    registerUser(data)
}
async function registerUser(data) {
    const url = `https://reqres.in/api/users`;
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) //post방식으로 전송할 데이터를 json형태로 전송

        }) //post방식일때는 옵션을 기술
        const resData = await res.json();
        console.log(resData);
        const { name, job, id, createAt } = resData;
        const result = document.querySelector('#result');
        result.innerHTML = `
        <h2>등록한 회원 정보</h2>
        <h3>ID : ${id}</h3>
        <h3>Name : ${name}</h3>
        <h3>Job : ${job}</h3>
        <h3>creatAt : ${createAt}</h3>
        `;
    } catch (error) {
        alert(error);
    }
}