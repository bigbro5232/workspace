const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const multer = require('multer');
// npm i multer --s

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/');
    },
    filename: function (req, file, cb) {
        let fname = Date.now() + '_' + file.originalname;
        cb(null, fname);
    }
});

const upMulter = multer({ storage });

router.use('/images', express.static('images'));

// 모든 도서 정보 가져오기
router.get('/', bookController.listBook);

// 도서 제목 키워드로 검색하기
router.get('/search', bookController.findBook);

// 도서 정보 등록
router.post('/', upMulter.single('image'), bookController.createBook);
// upMulter.single('input name') --> 알아서 업로드 처리

// 특정 도서 정보 가져오기
router.get('/:isbn', bookController.getBook);

// 특정 도서를 삭제하기
router.delete('/:isbn', bookController.deleteBook);

// 특정 도서를 수정하기
router.put('/:isbn', bookController.updateBook);


module.exports = router;