import express from 'express';
export let statusRoute = express.Router();

//STATIC FILES
statusRoute.get('/status',  (req, res) => {
    res.send("RUNNING")
})

export default statusRoute
