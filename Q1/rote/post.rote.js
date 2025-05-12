import {creatPost,deletePostSingle,getPost,getPostId,updaetPost} from "../controllers/Post.controllers.js"
import {Router} from "express"; 
const routPost =Router();

routPost.get('/users/:userId/',getPost);
routPost.get('/:id',getPostId);
routPost.post('/users/:userId',creatPost);
routPost.put('/:id',updaetPost);
routPost.delete("/:id",deletePostSingle);

export default routPost;