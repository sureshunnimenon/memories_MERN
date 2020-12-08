const express= require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
app.use(cors())
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))

const postRoutes = require('./routes/Posts')
app.use('/posts', postRoutes)

const CONNECTION_URL =
	'mongodb+srv://sureshmenon:ironhair394@cluster0.ijlvy.mongodb.net/memories?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, console.log(`server running on port ${PORT}`)))
.catch((error) => console.log(error) )

mongoose.set('useFindAndModify', false)