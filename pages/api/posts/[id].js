import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

dbConnect()


const handler = nc().delete(async(req, res) => {
   
    try {
        const posts = await Post.findOneAndDelete({_id: req.query.id})
        res.send({message:"Deleted Successfuly"});
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }
   
   
  }) .put(async (req, res) => {

    try {
        const post = await Post.findOne({_id: req.query.id})
        post.name = req.body.name
        post.value= req.body.value
        post.price= Number(post.value) / 1000 * 1250
        post.cost= Number(post.value) / 1000 * 1043
        await post.save()
        res.send({satus:200,  message:"successful" , customer: post});
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }

 
  }) 
 
  export default handler