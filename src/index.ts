import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! sd');
});

app.listen(3000, () => {
    console.log('dying on that port port 3000');
}
)

//console.log('Hello Worlx d! sd sd');
