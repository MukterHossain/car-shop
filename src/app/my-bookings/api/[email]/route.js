import { connectDB } from "@/app/component/lib/connectDB";
import { NextResponse } from "next/server";


export const GET = async (request, {params}) =>{
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
        const myBookings = await bookingsCollection.find({email: params.email }).toArray()
        return NextResponse.json({myBookings})
        
    } catch (error) {
        return NextResponse.json({message: 'Data not found'}, error)
        
    }
}