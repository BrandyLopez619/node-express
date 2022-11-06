const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const partnerRouter = require('./routes/partnerRouter');
const promotionRouter = require('./routes/promotionRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());  //when the server recieves request, this middleware will parse JSON into javascript properties so we can use it

app.use('/campsites', campsiteRouter);
app.use('/partners', partnerRouter);
app.use('/promotions', promotionRouter);


//all is  a catch all for all the routing methods so we dont have to do this for every method

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});