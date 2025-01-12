```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("mydatabase");
    const collection = db.collection("mycollection");

    // Correct update operation: using filter to target a specific document
    const filter = { _id: ObjectId("654321") }; // Replace with actual ObjectId
    const update = { $set: { field: "new value" } };
    const result = await collection.updateOne(filter, update);

    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```