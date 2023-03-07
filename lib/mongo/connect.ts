import { MongoClient } from "mongodb";

// export default connectDB() {
//     const { MongoClient, ServerApiVersion } = require('mongodb');
//     const uri = "mongodb+srv://SantiMongo:<password>@santicluster0.nbg9bt8.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//     client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//     });
// }


const URI = process.env.MONGODB_URI;
const options = {} ;

if (!URI) {
    throw new Error("Mongo URI not found");
}

let client = new MongoClient(URI, options);
let clientPromise: any;

if (process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect();
    }
}

export default clientPromise;