import { connectDB } from "@/app/component/lib/connectDB"
import { ObjectId } from "mongodb"



export const DELETE = async (request, {params}) =>{
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
      const res=  await bookingsCollection.deleteOne({_id: new ObjectId(params.id)})
        return Response.json({message: 'Bookings Data delete successfully', response: res})
        
    } catch (error) {
        return Response.json({message: 'Something went wrong'})
        
    }
}