import { connectDB } from "@/app/component/lib/connectDB"
import { NextResponse } from "next/server"


export const POST = async (request) =>{
    const newBooking = await request.json()
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
        const res = await bookingsCollection.insertOne(newBooking)
        return NextResponse.json({message: "Booked Successfully"}, {status: 200})
        
    } catch (error) {
        // console.log(error)
        return NextResponse.json({message: "Something was wrong"}, {status: 400}, error)
    }
}