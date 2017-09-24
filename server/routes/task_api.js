const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const task = require('../models/task_db.js');

router.get('/get-task',(req,res)=>{
	task.find({},(err,document)=>{
		if(!document){
			res.json({state:false,message:"No document found"})
		}else{
			res.json(document);
		}
	});
});

router.post('/add-task',(req,res)=>{
	 var newTask = req.body;
	task.insertMany(newTask,(err,document)=>{
		if(!document){
			res.json({state:false,message:"No document found"})
		}else{
			res.json(document);
		}
	});
});

router.put('/edit-task/:TITLE',(req,res)=>{
	console.log("body " + req.body);
	task.findOneAndUpdate(
		{ TITLE: req.params.TITLE},

			{DONE: req.body.DONE}
		,
		{
			upsert: true, 'new': true
		},

			function(err, updatedTask){
				if(err) {
					res.send("Error updating task");
				}else{
					res.json({ message: 'User updated!' });
					console.log(updatedTask);
				}
			}


	)
});

module.exports = router;
