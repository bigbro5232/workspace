// apiRouter.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/markets', async (req, res) => {
    try {
        const response = await axios.get('https://smart.incheon.go.kr/server/rest/services/Hosted/전통시장/FeatureServer/47/query?where=1%3D1&outFields=name,period,hmpg_addr,tel,roadaddr&outSR=4326&f=json');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
