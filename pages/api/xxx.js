import Gallery from "@/model/Gallery"
import databasecon from "@/lib/dbConnect";
import dbConnect from "@/lib/dbConnect";
export default async function handler(req, res) {

    await dbConnect()

    // const {method}=req;


    switch (req.method) {
        case "GET":{
            const r = await Gallery.find({userid:req.query.userid},{dp:1})
            // const r= await Gallery.deleteMany()
            return res.status(200).json(r)

        }
        case "POST":{
            const r = await Gallery.create({userid:req.body.userid,dp:req.body.dp})
            return res.status(200).json(r)



        }
        case "DELETE":{
            const r = await Gallery.deleteOne({_id:req.query.photoid})
            // const r= await Gallery.deleteMany()
            return res.status(200).json(r)





        }
        default:{
            return res.status(200).json("invalid")
        }


    }






}

