const express = require("express")

const app = express()
//view engine middleware
app.set("view engine", "ejs")
//middle ware
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
//Home route
app.get('/', (req, res) => {
    res.send("Hello file upload")
})
//my get route
app.get('/myget', (req, res) => {
   // console.log(req.body);
    res.send(req.query)
})
app.get('/postform', (req, res) => {
    res.render('postform')
})
//my post route
app.post('/mypost', (req, res) => {
   console.log(res.body);
   console.log(req.files);
   

})
// rendering the page
app.get('/getform', (req, res) => {
    res.render('getform')
})
app.listen(3000, () => {
    console.log('server is running at 3000');
})
