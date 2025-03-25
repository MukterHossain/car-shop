import { connectDB } from "@/app/component/lib/connectDB"


export const POST = async (request) =>{
    const newBooking = await request.json()
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
        const res = await bookingsCollection.insetOne(newBooking)
        return Response.json({message: "Booked Successfully"}, {status: 200})
        
    } catch (error) {
        console.log(error)
        return Response.json({message: "Booked Successfully"}, {status: 400})
    }
}