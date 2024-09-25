const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

app.set('port', 3333);

app.get('/axios', (req, res) => {
    const getUrlVal = 'https://www.kosta.or.kr/about';
    axios.get(getUrlVal, { responseType: 'arraybuffer' }).then((response) => {
        let htmlCMD = iconv.decode(response.data, 'utf-8').toString();
        let $ = cheerio.load(htmlCMD);
        // nbd_a _LAZY_LOADING_ERROR_HIDE
        let selectData = $('div._img_box img');
        // console.log(selectData.length);
        console.log(selectData);
        for (let i = 0; i < selectData.length; i++) {
            let imgUrl = selectData[i].attribs.src;
            let imgDatUrl = imgUrl.split('?')[0];
            console.log(imgDatUrl);
            axios.get(imgDatUrl, { responseType: 'arraybuffer' }).then((image) => {
                console.log(image.data);
                fs.writeFile(`./download/${i}.jpg`, image.data, () => {
                    console.log('이미지 다운로드 완료');

                });
            });
        }

        res.end('');
    });
});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
});

