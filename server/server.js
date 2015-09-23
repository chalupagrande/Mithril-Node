var express = require('express')
var app = express()

app.use(express.static('./client'));
app.get('/admin',function(req,res){
	res.send('this should be the admin page');
})

app.listen(3000)