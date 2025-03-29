import { connectDB } from "@/app/component/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"



export const DELETE = async (request, {params}) =>{
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
      const res=  await bookingsCollection.deleteOne({_id: new ObjectId(params.id)})
        return NextResponse.json({message: 'Bookings Data delete successfully', response: res})
        
    } catch (error) {
        return NextResponse.json({message: 'Something went wrong'})
        
    }
}
export const PATCH = async (request, {params}) =>{
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    const updateDoc = await request.json()
    try {
      const res=  await bookingsCollection.updateOne({_id: new ObjectId(params.id)}, {
        $set:{
            ...updateDoc
        }},
        {upsert: true}
      )
        return NextResponse.json({message: 'Bookings Data Update successfully', response: res})
        
    } catch (error) {
        return NextResponse.json({message: 'Something went wrong'})
        
    }
}
export const GET = async (request, {params}) =>{
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
      const res=  await bookingsCollection.findOne({_id: new ObjectId(params.id)})
        return NextResponse.json({message: 'Bookings data found', data: res})
        
    } catch (error) {
        return NextResponse.json({message: 'Something went wrong'}, error)
        
    }
}