let express = require('express')
let router = express.Router();
let path = require('path');
//let todoList = [];
let todoList = [{}];
//our todo list
//RESTful api
router.get('/api/list', function(req, res){
  res.json(todoList); //Respond with JSON
});
router.get('/api/get/:id', function(req, res){
   res.json(todoList[req.params.id]); //Notice the wildcard in the URL?
                //Try browsing to /api/get/0 once you've added some entries
});
router.post('/api/create', function(req, res){
  console.log("Creating the following todo:", req.body.todo);
 todoList.push(req.body.todo);
res.redirect(req.baseUrl + '/api/list');
});
router.post('/api/delete', function(req, res){
  console.log("Deleting Todo:", req.body.todo);
  for(var i = todoList.length - 1; i >= 0; i--) {
    if(todoList[i] === req.body.todo) {
       todoList.splice(i, 1);
    }
  }
  res.redirect(req.baseUrl + '/api/list');
});
router.post('/api/edit', function(req, res){
  console.log("editing a todo entry");
});



router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'todo', 'index.html'));
});
router.get('/create', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'todo', 'create.html'));
});
router.get('/delete', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'todo', 'delete.html'));
});
router.post('/edit', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'todo', 'edit.html'));
});




module.exports = router;
