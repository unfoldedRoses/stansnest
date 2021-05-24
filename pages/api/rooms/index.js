import nc from "next-connect";
import {allRooms,newRoom,getSingleRoom} from '../../../controllers/RoomController'
import dbConnect from '../../../config/dbconnect'

const handler=nc();
dbConnect();
handler.get(allRooms)
handler.post(newRoom)

export default handler;

