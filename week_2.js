const express = require ('express')
const app = express();
const port = 3000
app.use(express.json());

function registerUser(req, res, next){
    const{name, email} = req.body
    if(!name|| !email){
        return res.status(400).send("Name and email are required");
    }
    if(!email.includes("@")){
        return res.status(400).send ("Invalid Email");
    }
    next()
}



app.get('/week 2', (req, res) => {
    res.send('My Week 2 API!')
});

app.post('/user', registerUser, (req, res) => {
    const {name, email} = req.body;
    console.log(req.body);
    res.send(`Hello! User ${name},you have been registered`);
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send(id);
});


app.post('/echo', (req, res) => {
    res.json({ echoed: req.body });
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date()}`);
    next()
});

app.get("/protected", (req, res) => {
    res.send("This is logged");
})
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});
