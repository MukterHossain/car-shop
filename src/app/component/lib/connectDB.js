import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI; // নিরাপদ উপায়ে এনভায়রনমেন্ট ভ্যারিয়েবল ব্যবহার
if (!uri) {
    throw new Error("MongoDB connection URI is missing!");
}

let client;
let db;
export const connectDB = async () =>{
    
    if(db) return db;
    try {
        // const uri = process.env.NEXT_PUBLIC_MONGODB_URI
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          await client.connect(); // ক্লায়েন্ট সংযোগ স্থাপন
          db= client.db('car-shop')
          return db;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

// সার্ভার বন্ধ হলে সংযোগ বন্ধ করা
process.on("SIGINT", async () => {
    if (client) {
        await client.close();
        console.log(" MongoDB connection closed.");
        process.exit(0);
    }
});