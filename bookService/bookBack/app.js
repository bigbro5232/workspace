const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const { dlopen } = require('process');

const port = process.eventNames.PORT || 3333;

const app = express();

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    next();
})




const books = [
    { isbn: 1111, title: 'Node교과서', publish: '길벗', price: 40000, image: 'a.jpg' },
    { isbn: 1112, title: 'JavaScript교과서', publish: '한빛', price: 50000, image: 'b.jpg' },
    { isbn: 1113, title: 'Node.js로 서버 만들기', publish: '로드북', price: 60000, image: 'c.jpg' }
];

// isbn :일련번호 title: 'MySQL DB' publish: '에이스' peice: 70000 image: d.jpg

app.post('/books', (req, res) => {
    let isbn = 1111 + books.length;
    console.log(`isbn: ${isbn}`);

    const { title, publish, price, image } = req.body;
    console.log(title, publish, price, image);

    const newBook = {
        isbn, //isbn:isbn 과 동일
        title,
        publish,
        price,
        image
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.get('/books/:isbn', (req, res) => {
    const { isbn } = req.params;
    console.log('isbn: ', isbn, 'typeof: ', typeof (isbn));
    books.map((x) => {
        if (x.isbn == isbn) {
            return res.json(x);
        }
        else {
            return res.status(404).send();
        }
    });
});

app.delete('/books/:isbn', (req, res) => {
    const { isbn } = req.params;
    const deleteIdx = books.findIndex((x) => x.isbn == isbn)
    if (deleteIdx != -1) {
        const delBook = books.splice(deleteIdx, 1);
        res.json(delBook[0]);
    } else {
        res.status(404).send();
    }
});

app.put('/books/:isbn', (req, res) => {
    const { isbn } = req.params;
    const { title, publish, price } = req.body; //put,post는 req.body에서 추출

    const findIdx = books.findIndex((x) => x.isbn == isbn)
    if (findIdx != -1) {
        const updatedBook = { ...books[findIdx], title, publish, price };
        // json표기할때 변수와 값이 같을때는 생략하고 변수만 입력해도 적용
        // put할때 위와같은 방식으로 할당하면 변경값만 입력해도 update가능
        books[findIdx] = updatedBook;
        res.json(updatedBook);
        // books[findIdx].title = title;
        // books[findIdx].publish = publish;
        // books[findIdx].price = price;
        // res.json(books[findIdx]);
    } else {
        res.status(404).send();
    }
})

app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);

});
