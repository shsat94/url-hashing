const express = require('express');
const router = express.Router();
const urlModel=require('../database/urlSchema');



router.get('/:hashedUrl',async(req,res)=>{
    const { hashedUrl } = req.params;
    const urlEntry= await urlModel.findOne({ hashedUrl });

    if (!urlEntry) {
        return res.status(404).send('URL not found.');
    }

    const currentDateTime = new Date();
    
    if ((urlEntry.expiresAt && currentDateTime > urlEntry.expiresAt) || urlEntry.clicks >= urlEntry.maxClicks) {
        return res.status(410).send('URL expired or usage limit exceeded.');
    }

    // Increment click count and redirect
    urlEntry.clicks += 1;
    await urlEntry.save();

    res.redirect(urlEntry.originalUrl);
    
});

module.exports=router;