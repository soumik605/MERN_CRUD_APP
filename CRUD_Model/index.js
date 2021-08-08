import express from 'express'
import mongoose from 'mongoose'
import Routes from "./route/route.js"
import cors from 'cors'
import bodyParser from 'body-parser'

const app= express()
const port = 8000


const url = `mongodb://soumikmaity:s*******5@cluster0-shard-00-00.b2oo8.mongodb.net:27017,cluster0-shard-00-01.b2oo8.mongodb.net:27017,cluster0-shard-00-02.b2oo8.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-buj8su-shard-0&authSource=admin&retryWrites=true&w=majority`


app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/users", Routes)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(()=>{
    app.listen(port , ()=>{
        console.log(`listening... ${port}`)
    })
})
.catch((err)=>{
    console.log('Error : ',err.message )
})
