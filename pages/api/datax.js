import dbConnect from "@/lib/dbConnect";
import video from '@/model/video'



export default async function handler(req, res) {


    await dbConnect()


    let data={}

    data.video=await video.findOne({_id:req.query._id});





    res.status(200).json(data);




}