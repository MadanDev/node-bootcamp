const express = require('express');
const app = express();
const fs = require('fs');
const port = 8000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.use(express.json()); //middleware for getting the request body

//get endpoint!
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    })
})

//get specific tour id
app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find((element) => element.id === id);
    res.status(200).json({
        status: 'success',
        data: {
            tours: tour
        }
    })
})

//post endpoint!
app.post('/api/v1/tours', (req, res) => {
    const newID = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newID }, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })
})

//get endpoint!
app.patch('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: 'updated'
        }
    })
})

app.delete('/api/v1/tours', (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
})

app.listen(port, '127.0.0.1', () => {
    console.log('Listening..')
})