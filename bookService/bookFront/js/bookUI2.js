import { getAllBook, addBook, getBook, findBook, deleteBook, updateBook, } from './bookApi2.js';
const init = () => {
    const btnAll = document.querySelector('#btnAll');
    const btnCreate = document.querySelector('#btnCreate');
    const btnUpdate = document.querySelector('#btnUpdate');
    const btnSearch = document.querySelector('#btnSearch');

    btnAll.onclick = async () => {
        getAllBook();
    }

    btnCreate.onclick = () => {
        const title = document.querySelector('#title').value;
        const publish = document.querySelector('#publish').value;
        const price = document.querySelector('#price').value;
        if (!title || !publish || !price) {
            alert('모든 필드값을 입력하세요');
            return;
        }

        const book = { title, publish, price };

        addBook(book);
    }
    btnUpdate.onclick = () => {
        const isbn = document.querySelector('#isbn').value;
        const title = document.querySelector('#title').value;
        const publish = document.querySelector('#publish').value;
        const price = document.querySelector('#price').value;
        if (!isbn || !title || !publish || !price) {
            alert('모든 필드값을 입력하세요');
            return;
        }
        if (isNaN(price)) {
            alert('가격은 숫자로 입력하세요')
            return;
        }

        const tmpBook = { isbn, title, publish, price };

        updateBook(tmpBook);
    }

    btnSearch.onclick = () => {
        let keyword = document.querySelector('#keyword').value;
        if (!keyword) {
            alert('갭색할 도서명을 입력하세요');
            document.querySelector('#keyword').focus();
            return;
        } else {
            findBook(keyword);
        }
    }
    getAllBook();
}
window.getBook = getBook;
window.deleteBook = deleteBook;
// 모듈에서 정의된 변수나 함수는 해당 모듈에서만 접근 가능
// 모듈에서 export하려면 다른 모듈에서 import할 수 있다
// 모듈화한 함수를 HTML에서 사용하려면 window객체에
// 속성으로 등록해줘야 사용 가능하다.
// DOM처리를 통한 해결방안 존재
document.addEventListener('DOMContentLoaded', init);
