const express = require('express');
const router = express.Router();
const multer = require('multer'); //파일 업로드 처리

// 업로드 파일을 저장할 정보를 갖는 storage 객체 할당
const storage = multer.diskStorage({
    destination: function (req, file, callback) { //업로드할 디렉토리 설정
        callback(null, 'public/upload/') //public/upload폴더에 업로드
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname); //업로드할 파일명 설정
    },
    filename: function (req, res, callback) {
        callback(null, Date.now() + '_' + file.originalname);
    }
});

// router.post('/fileUp', (req, res) => {
// });

const upMulter = multer({ storage });
router.use('/upload', express.static('upload'));

router.post('/fileUp', upMulter.single("myfile"), (req, res) => {
    // 업로드한 파일 정보를 추출하여 브라우저에 출력
    const fname = req.file; //첨부파일명
    const name = req.body.name; //올린사람

    // res.send(`파일 업로드 잘 들어옴<br>
    //     <h2>첨부파일: ${fname}</h2>
    //     <h2>올린이: ${name}</h2>`);
    res.json({ filename: req.file, name: name });
})

module.exports = router;