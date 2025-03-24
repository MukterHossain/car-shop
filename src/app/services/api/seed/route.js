import { connectDB } from "@/app/component/lib/connectDB";
import { services } from "@/app/component/lib/services";


export const GET = async () =>{
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    try {
        await servicesCollection.deleteMany();
        const res = await servicesCollection.insertMany(services)
        return Response.json({message: "Seeded Successfully"})
        
    } catch (error) {
        console.log(error)
        
    }
}