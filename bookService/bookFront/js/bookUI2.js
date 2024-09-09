import { getAllBook, addBook, addBookFileUp, getBook, findBook, deleteBook, updateBook, } from './bookApi2.js';
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
        // 도서 이미지 첨부파일값 반환
        const image = document.querySelector('#image').files[0];

        if (!title || !publish || !price) {
            alert('모든 필드값을 입력하세요');
            return;
        }
        // 파일 업로드 안할 경우 --> json데이터로 전송
        // const book = { title, publish, price };
        // addBook(book);

        // 파일 업로드를 할 경우 --> FormData에 담아서 전송
        let formData = new FormData();
        formData.append('title', title);
        formData.append('publish', publish);
        formData.append('price', price);
        if (image) {
            // 첨부파일이 있다면
            formData.append('image', image);
        }
        console.log(Array.from(formData.entries()));
        addBookFileUp(formData);
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
            alert('검색할 도서명을 입력하세요');
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
