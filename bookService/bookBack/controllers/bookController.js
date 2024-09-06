const pool = require('../models/dbPool');


// 도서 정보 등록 처리
exports.createBook = async (req, res) => {
    const { title, publish, price } = req.body;
    console.log(title, publish, price);
    if (!title || !publish || !price) {
        return res.status(400).json({
            message: '제목,출판사,가격값이 들어오지 않았습니다.'
        });
    }
    const sql = `INSERT INTO book (title,publish,price) 
        VALUES (?,?,?);`; // ? : in parameter
    try {
        const [result] = await pool.query(sql, [title, publish, price]);
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