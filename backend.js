const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();


const uri = 'mongodb+srv://shihaolu:INST377@cluster0.1e25i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

app.use(express.json()); 

app.post('/upload', async (req, res) => {
  
  const { name, uploadedAt, colorPalette } = req.body;

  try {
    await client.connect();
    console.log("connection successful")
    const database = client.db('INST'); 
    const collection = database.collection('images');

    const imageDoc = {
      name,
      uploadedAt,
      colorPalette,
    };


    const result = await collection.insertOne(imageDoc);

    res.status(200).json({ success: true, insertedId: result.insertedId });

  } catch (error) {
    console.error('Error inserting document:', error);
  }
});

app.get('/images', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('INST');
    const collection = database.collection('images');
    const images = await collection.find({}).toArray();
    res.status(200).json(images); 
  }
    catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  
})
app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});