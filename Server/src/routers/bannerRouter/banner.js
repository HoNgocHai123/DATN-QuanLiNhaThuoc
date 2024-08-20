// bannerRouter.js
const express = require('express');
const bannerController = require('../../controllers/bannerControler/banner');

const Router = express.Router();

// Đường dẫn để thêm banner
Router.post('/create', bannerController.createBanner);
Router.get('/getbanners', bannerController.getBanners);
Router.delete('/:id', bannerController.deleteBanner); 
Router.put('/:id', bannerController.updateBanner); 

module.exports = Router;
