
import Room from '../models/roomSchema'
import cloudinary from 'cloudinary'
import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from '../middleware/catchAsyncErrors'
import APIFeatures from '../utils/apiFeatures'

//get all hotels
const allRooms= catchAsyncErrors(async (req, res) => {
    const apiFeatures = new APIFeatures(Room.find(), req.query)
        .search().filter()
    let rooms = await apiFeatures.query;
    res.status(200).json({
        success: true,
        rooms
    })

})



//get hotel by :id
// Get room details   =>   /api/rooms/:id
const getSingleRoomm =catchAsyncErrors( async (req, res, next) => {

    const room = await Room.findById(req.query.id);
    console.log(room)
    if (!room) {
        return next(new ErrorHandler('Room not found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        room
    })
})



const updateRoomm =catchAsyncErrors( async (req, res, next) => {

    let room = await Room.findById(req.query.id);
    console.log(room)
    if (!room) {
        return next(new ErrorHandler('Room not found with this ID', 404))
    }

   room =await Room.findByIdAndUpdate(req.query.id,req.body,{
       new:true,
       runValidators:true,
       room
   })
   res.status(200).json({
    success: true,
    room
})

})



const deleteRoomm =catchAsyncErrors( async (req, res, next) => {

    let room = await Room.findById(req.query.id);
    console.log(room)
    if (!room) {
        return next(new ErrorHandler('Room not found with this ID', 404))
    }

   room =await Room.remove()
   res.status(200).json({
    success: true,
    message:"hotel deleted!"
})

})


//crete new hootel
const newRoom=catchAsyncErrors(async (req,res)=>{
    try {
        const room=await Room.create(req.body);
        res.status(200).json({
            success:true,
            room
    
        })   
    } catch (error) {
       res.status(400).json({
           success:false,
           error:error.message
       }) 
    }
})

export{
    allRooms,
    newRoom,
    getSingleRoomm,
    updateRoomm
}
    