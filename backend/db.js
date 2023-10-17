const mongoose = require("mongoose");

const uri =
  "mongodb+srv://gofood:gofood@cluster0.5udulbo.mongodb.net/gofoodDB?retryWrites=true&w=majority";

const collectionName = "food_items";
const collectionName1 = "foodCategory";

async function readCollectionData() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const collection = mongoose.connection.collection(collectionName);
  const category = mongoose.connection.collection(collectionName1);
  const data1 = await collection.find().toArray();
  const data2 = await category.find({}).toArray();

  global.food_items = data1;

  global.foodCategory = data2;

  // mongoose.connection.close();
}

module.exports = readCollectionData;
