var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/contactanos.html', function (req, res) {
   res.sendFile( __dirname + "/" + "contactanos.html" ); 
})
app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono,
        empresa:req.body.empresa,
        estado:req.body.estado
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })
 var server = app.listen(5501, "127.0.0.1" ,function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
  })