var Sequelize = ('sequelize')
var express = require('express')
var commentRouter = express.Router();
var app = express()
var Comment = require('../models').Comment
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// var C  = require('../models/index')






const getAllComments=(req,res)=>{

		  console.log('data')
		Comment.findAll({}).then(()=> {
		res.send('this shit works')
	})
}



// app.get('/api/comment', (req,res) => {
//    Comment.findAll({
//    })
//    .then((data) => {
//        // console.log(data);
//        res.send('this works')
//    })
// });
const postComments=(req,res)=>{
	Comment.create({
		comment:'money'
	}).then((data)=>{
		res.send('works')
	})
}


// const getAllQuestions = (req,res)=>{
// 	Comment.findAll({}).then(function(data){
// 		order:"createdAt ASC"	
// 		res.send(data)
// 	})
// }

commentRouter.route('/')
	.get(getAllComments)
	.post(postComments)

// 
module.exports = commentRouter