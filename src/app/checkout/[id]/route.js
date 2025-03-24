import { connectDB } from "@/app/component/lib/connectDB"

export const POST = async (request) =>{
    const booking = await request.json()
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
        const newBooking = await bookingsCollection.insetOne(booking)
        return Response.json({message: "Service Booked Successfully"})
        
    } catch (error) {
        console.log(error)
        
    }
}