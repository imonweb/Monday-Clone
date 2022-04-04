const PORT = 8000;
const express = require('express');
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

// const url = 'https://deb373b5-3aab-4df9-a0c8-54287a8bc1a8-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections'
const url = 'https://deb373b5-3aab-4df9-a0c8-54287a8bc1a8-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:GdaAQDfpkBMFQXWBgutfJvqb:3f64474811c99cda8a629ad1383616e8e155dd145841f11edcea73cef2972b64'

app.get('/tickets', async (req, res) => {
   const options = {
    method: 'GET',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token, 
    }
  }
  try {
    const response = await axios(`${url}?page-size=20`, options)
    res.status(200).json(response.data)
  } catch (err){
    console.log(err)
    res.status(500).json({message: err})
  }
})

app.post('/tickets', async (req, res) => {
  const formData = req.body.formData 

  const options = {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
      'Content-Type': 'application/json'
    },
    data: formData
  }

  try {
    const response = await axios(url, options)
    res.status(200).json(response.data)
  } catch (err){
    console.log(err)
    res.status(500).json({message: err})
  }
})


app.listen(PORT, () => console.log('server running on PORT ' + PORT))