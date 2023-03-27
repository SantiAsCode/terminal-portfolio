import mongoose from "mongoose";

const URI = process.env.MONGODB_URI!;
const options = {
    dbName: 'notimation-landings',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useFindAndModify: false,
    useCreateIndex: true,
};

if (!URI) throw new Error("Mongo URI not found");

export default function connectMongo() {
    if (mongoose.connection.readyState >=1) return;
    mongoose.connect(URI, options)
}

// let cached = global.mongoose

// if (!cached) cached = global.mongoose = { conn: null };

// export const connectMongo = async () => {
//     if (cached.conn) return cached.conn;
//     cached.conn = await mongoose.connect(URI, options);
//     return cached.conn;
// }

// let client = new MongoClient(URI, options);
// let clientPromise: Promise<MongoClient>;
// let globalWithMongo = global as typeof globalThis & {
//     _mongoClientPromise: Promise<MongoClient>
//   }

// if (process.env.NODE_ENV !== 'production') {
//     if (!globalWithMongo._mongoClientPromise) {
//         globalWithMongo._mongoClientPromise = client.connect();
//     }
//     clientPromise = globalWithMongo._mongoClientPromise;
// } else {
//     clientPromise = client.connect();
// }

// export default clientPromise;