import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { getSingleRoomm ,updateRoomm} from '../../../controllers/RoomController'
import onError from '../../../middleware/errors'

const handler=nc({onError});


dbConnect();

handler.get(getSingleRoomm)
handler.put(updateRoomm)
export default handler;