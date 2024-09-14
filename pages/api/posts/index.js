import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

dbConnect()


const handler = nc().get(async(req, res) => {
   
    try {
        const posts = await Post.find({})
        res.send(posts);
        // res.send({message:"hellooo"})
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }
   
   
  }).post(async(req, res) => {
    const {name,value} = req.body
    const price = Number(value) / 1000 * 1250 ; 
    const cost = Number(value) / 1000 * 1043

    // console.log(req.body)
    const newpost = new Post({name,value , price , cost})
    try {
        console.log("post is " , newpost)
         await newpost.save()
        res.send(newpost);
        // res.send(name)
    } catch (error) {
        return  res.status(400).json({message:'Sorry added something went wrong !'});
    }
  })



  export default handler