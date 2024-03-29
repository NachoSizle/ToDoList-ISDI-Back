import type { Route } from "./routes/type"
import routes from './routes/index'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

require("dotenv").config();

const __init__ = () => {
  routes.forEach((route: Route) => {
    app[route.method](route.path, route.action)
  });

  app.listen(port, () => console.log('Server is listening, port ' + port))
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => __init__())
  .catch((err: any) => console.error("Error at connect to MongoDB: ", err));
