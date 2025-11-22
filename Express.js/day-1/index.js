import express from 'express';
import Userdata from "./data/data.js"


const app = express();
const PORT = 3000;

app.use(express.json());

// * 1. Get Request (it is used to fetch data from the server)
app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello World from Express.js');
});

// Industry Standard 

app.get('/api/v1/users', (req, res) => {
    res.status(200);
    res.send( Userdata );
});

// query params
app.get('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = Userdata.find((u) => u.id === id);
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }   
});


// *2. Post Request (it is used to send data to the server)
app.post('/api/v1/users', (req, res) => {
    const {name, displayname} = req.body;

    
    res.status(201);
    res.send('Post Request from Express.js');
});



app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
});