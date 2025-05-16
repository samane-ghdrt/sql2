import {creatUser,deleteUserSingle,getUser,getUserId,updaetUser} from "../controllers/User.controllers.js"
import {Router} from "express"; 
const routUser =Router();

routUser.get('/',getUser);
routUser.get('/:id',getUserId);
routUser.post('/',creatUser);
routUser.put('/:id',updaetUser);
routUser.delete("/:id",deleteUserSingle);

export default routUser;