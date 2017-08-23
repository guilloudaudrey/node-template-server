const express = require('express');
const mustache = require('mustache');
let app = express();




// app.get('/', function(req, res) {
//     res.send('Hello !');
// });

app.use(express.static('public'));

app.get("/test", function(req, resp) {
    let str = mustache.render("Hello {{name}}", {
        name: "audrey"
    })
    resp.send(str)
})

app.listen(80, function() {
    console.log('Example app listening on port 3000!');
});