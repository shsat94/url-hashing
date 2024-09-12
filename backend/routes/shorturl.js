const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const urlModel = require('../database/urlSchema');


const genHashedUrl = (url) => {
    return crypto.createHash('sha256').update(url).digest('hex').slice(0, 10);
}


router.post('/shortend', async (req, res) => {
    try {
        const { originalUrl, maxClicks, expiresAt } = req.body;

        //hashed url using the crypto-sha256
        const hashedUrl = genHashedUrl(originalUrl);

        //newUrl model 
        const newUrl = urlModel({
            originalUrl,
            hashedUrl,
            maxClicks: maxClicks || Infinity,
            expiresAt: expiresAt ? new Date(expiresAt) : null
        });

        //saving the model
        await newUrl.save();
        res.json({ shortenedUrl: `http://localhost:5000/${hashedUrl}`});
        
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;