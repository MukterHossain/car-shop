import { connectDB } from "@/app/component/lib/connectDB";
import { services } from "@/app/component/lib/services";
import { NextResponse } from "next/server";


export const GET = async () =>{
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    try {
        await servicesCollection.deleteMany();
        const res = await servicesCollection.insertMany(services)
        return NextResponse.json({message: "Seeded Successfully"})
        
    } catch (error) {
        return NextResponse.json({message: 'No data found', error})
        
    }
}