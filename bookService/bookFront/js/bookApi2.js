const baseUrl = `http://localhost:3333`;
const url = baseUrl + '/api/books'

const findBook = async (keyword) => {
    // alert(keyword);
    try {
        const urlFind = url + `/search?keyword=${keyword}`;
        const response = await fetch(urlFind);
        const data = await response.json();
        renderBooks(data);
    } catch (err) {
        alert(err);
    }
}
const addBook = async (newBook) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        });
        const data = await response.json();
        console.log(data);
        getAllBook();
        clearField();
    } catch (err) {
        console.error(err);
        alert(err);
    }
}
const getAllBook = async () => {
    try {
        const response = await fetch(url);
        // alert(res.status);
        const data = await response.json();
        renderBooks(data)
    } catch (err) {
        alert(err);
    }
}
const getBook = async (isbn) => {
    try {
        const getUrl = url + `/` + isbn;
        const response = await fetch(getUrl);
        const data = await response.json();
        console.log(data);
        setFormData(data);
    } catch (err) {
        alert(err);
    }
}


const renderBooks = (data) => {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    data.forEach(book => {
        const str = `<tr>
        <td>${book.title}</td>
        <td>${book.publish}</td>
        <td>${book.price}</td>
        <td>${book.isbn}</td>
        <td>
        <button class="btn btn-warning btn-sm"onclick="getBook('${book.isbn}')">수정</button>
        <button class="btn btn-danger btn-sm" onclick="deleteBook('${book.isbn}')">삭제</button>
        </td>
        </tr>
        `;
        result.innerHTML += str;
    });
}
const setFormData = (book) => {
    if (!book) {
        alert('해당 도서는 없습니다');
        return;
    }
    document.querySelector('#isbn').value = book.isbn;
    document.querySelector('#title').value = book.title;
    document.querySelector('#publish').value = book.publish;
    document.querySelector('#price').value = book.price;

    let str = ``;
    if (book.image) {
        str += `<img src="images/${book.image}" alt="${book.title}" class="img-thumbnail">`;
    } else {
        str += `<img src="images/noimage.jpg" class="img-thumbnail">`;
    }
    document.querySelector('#bookImage').innerHTML = str;

    const btnUpdate = document.querySelector('#btnUpdate');
    btnUpdate.removeAttribute("disabled");
}
const deleteBook = async (isbn) => {
    // alert(isbn);
    const yn = confirm(`${isbn}번 도서를 정말 삭제할까요>`);
    if (yn) {
        try {
            const urlDelete = url + '/' + isbn;
            const response = await fetch(urlDelete, {
                method: 'DELETE'
            });
            const data = await response.json();
            console.log(data);
            getAllBook();
        } catch (err) {
            alert(err);
        }

    } else {
        return;
    }
}
const updateBook = async (newBook) => {
    try {
        const urlUpdate = url + `/${newBook.isbn}`;
        const response = await fetch(urlUpdate, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        });
        const data = await response.json();
        console.log(data);
        getAllBook();
        clearField();
        document.querySelector('#btnUpdate').setAttribute('disabled', 'disabled')
    } catch (err) {
        alert(err);
    }
}



const clearField = () => {
    document.querySelector('#isbn').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#publish').value = '';
    document.querySelector('#price').value = '';
    document.querySelector('#title').focus();
}

export { getAllBook, addBook, getBook, findBook, deleteBook, updateBook };