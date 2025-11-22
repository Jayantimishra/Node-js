import express from 'express';
import Userdata from "./data/data.js"

const app = express();
const PORT = 3000;

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


app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
});