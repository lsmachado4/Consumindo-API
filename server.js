const cors = require('cors')
const express = require('express')
const app = express()//app = server
const axios = require('axios')

app.use(cors())



app.get('/', async (req, res) => {
    console.log('NODEMON RODANDO')
    try {
        //Response é a resposta do axios, mas retiro o {data} do response. 
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)
        return res.json(data)
    } catch (error) {
        console.error(error)
    }




})





app.listen(4567)
//referência: https://www.youtube.com/watch?v=vYlz3SmNXQQ&list=PL85ITvJ7FLoifcDIBeuuAhh4_799RZaSc&index=12&ab_channel=Rocketseat