const express = require('express')
const schemaGenerator = require('generate-schema')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT|| 4000

app.use(bodyParser.json())

app.post('/generate/schema', function (req, res) {
    try {
        const data = req.body
        const schema = schemaGenerator.json('Schema Generator - Vipul', data)
        return res.status(200).send({
            message: 'Schema Generated Successfully!',
            data: schema
        })
    } catch (error) {
        return res.status(500).send({
            message: 'Error occured!',
            data: error
        })
    }
})

app.get('/', function (req, res) {
    try {
        return res.status(200).send({
            message: 'App is Running Successfully'
        })
    } catch (error) {
        return res.status(500).send({
            message: 'Error occured!',
            data: error
        })
    }
})

app.listen(port, function (err, res) {
    if (err) {
        console.log(`\n Error while connecting to port: ${port}`)
        return err
    }
    console.log(`Server listening on port: ${port}`)
})