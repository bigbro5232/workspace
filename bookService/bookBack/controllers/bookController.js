const pool = require('../models/dbPool');


// 도서 정보 등록 처리
exports.createBook = async (req, res) => {

    const { title, publish, price } = req.body;
    // 첨부파일
    const image = req.file ? req.file.filename : 'moimage.jpg';
    console.log(image);


    console.log(title, publish, price);
    if (!title || !publish || !price) {
        return res.status(400).json({
            message: '제목,출판사,가격값이 들어오지 않았습니다.'
        });
    }
    const sql = `INSERT INTO book (title,publish,price,image) 
    VALUES (?,?,?,?);`; // ? : in parameter
    try {
        const [result] = await pool.query(sql, [title, publish, price, image]);
        console.log('result: ', result);
        return res.json(result);
    } catch (err) {
        console.log((err));
        return res.status(500).json({ message: 'DB에러 발생 ' + err.message });
    }
}
//================

exports.listBook = async (req, res) => {
    const sql = `SELECT * FROM book ORDER BY isbn DESC;`;
    try {
        const [data] = await pool.query(sql);
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}//===================

exports.findBook = async (req, res) => {
    let { keyword } = req.query;
    console.log(keyword);
    keyword = keyword.trim();
    if (!keyword) {
        return res.json({ message: '검색어를 입력하세요' });
    }
    try {
        const sql = `SELECT * FROM book WHERE title LIKE ? ORDER BY isbn DESC`;
        const [data] = await pool.query(sql, [`%${keyword}%`]);
        // console.log('data: ', data);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

}

exports.getBook = async (req, res) => {
    const { isbn } = req.params;
    console.log('isbn: ', isbn);
    const sql = `SELECT isbn, title, publish, price, image, indate 
            FROM book WHERE isbn=?
            `;
    try {
        const [data] = await pool.query(sql, [isbn]);
        // isbn이 primary key이므로 데이터가 있다면 1개 온다
        if (data.length > 0) {
            res.json(data[0]);
        } else {
            res.json({});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}//=====================

exports.deleteBook = async (req, res) => {
    const { isbn } = req.params;
    if (!isbn) {
        return res.status(400).json({ message: '도서번호가 필요합니다' });
    }
    // console.log('isbn: ', isbn);
    const sql = `DELETE FROM book WHERE isbn=?`;
    try {
        const [result] = await pool.query(sql, [isbn]);
        if (result.affectedRows === 0) {
            return res.json({ message: '삭제할 상품이 존재하지 않습니다.' });
        }
        res.json({ message: `${isbn}번 상품을 삭제했습니다.` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateBook = async (req, res) => {
    const { isbn } = req.params;
    let { title, publish, price } = req.body;

    title = title.trim();
    publish = publish.trim();
    // price = price.trim();

    if (!isbn || !title || !publish || !price) {
        return res.status(400).json({ message: '모든 필드값을 입력하세요' });
    }
    const sql = `UPDATE book SET title=?, publish=?, price=? WHERE isbn=?`;
    try {
        const [result] = await pool.query(sql, [title, publish, price, isbn]);
        console.log('result: ', result);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: '도서내용 없음' });
        }
        res.json({ message: 'success' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
