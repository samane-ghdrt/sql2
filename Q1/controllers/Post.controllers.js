import Post from "../model/Post.js";

export const getPost=async(req,res)=>{
try {
    const posts=await Post.findAll();
    res.status(200).send(posts);
} catch (error) {
   console.log(error);
   res.status(500).JSON({error:"server error!!!"});
}
};

export const getPostId=async (req,res)=>{
    try {
        const {id}=req.param;
        const post=await Post.findByPk(Number(id));

        if(post===null){
            return res.status(404).JSON({error:"not find"})
        }

        res.status(200).send(post);
    } catch (error) {
       console.log(error);
       res.status(500).JSON({error:"server error!!!"});
    }
};


export const creatPost=async(req,res)=>{
    try {
    const postNew= await Post.create(req.body)
    res.status(201).send(postNew);
        
    } catch (error) {
        console.log(error);
        res.status(500).JSON({error:"server error!!!"});
    }
};


export const updaetPost =async(req,res)=>{
    try {
        const {id}=req.param;
        const post= await Post.findByPk(Number(id));

        
        if(post===null){
            return res.status(404).JSON({error:"not find"})
        }

        await post.update(req.body);
    res.status(200).send(post);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"server error!"})
    }
};

export const deletePostSingle =async(req,res)=>{
    try {
        const {id}=req.param;
        const postdelet= await Post.findByPk(Number(id));

        
        if(postdelet===null){
            return res.status(404).JSON({error:"not find"})
        }

        await postdelet.destroy();
        res.status(200).json({ message: "Post deleted successfully" });


        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"server error!"})
    }
}