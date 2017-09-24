const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const user = require('../models/user_db.js');


router.get('/get-user',(req,res)=>{
	user.find({},(err,document)=>{
		if(!document){
			res.json({state:false,message:"No document found"})
		}else{
			res.json(document);
		}
	});
});


router.post('/add-user',(req,res)=>{
	var newUser = req.body;
	user.insertMany(newUser, (err,document)=>{
		if(!document){
			res.json({state:false,message:"No document found"})
		}else{
			res.json(document);
		}
	});
});

module.exports = router;
