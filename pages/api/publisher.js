import dbConnect from "@/lib/dbConnect";
import PublisherDB from '@/model/PublisherDB'

export default async function handler(req, res) {


    await dbConnect()

    switch (req.method) {

        case 'GET':
            const r=await PublisherDB.find({})
            res.status(200).json(r);
            break;
        case 'DELETE':
            const gr=await PublisherDB.deleteOne({_id:req.query._id})
            res.status(200).json(gr);
            break;
        case 'POST':
            let rx="";
            if (req.query._id){
             rx=await PublisherDB.updateOne({_id:req.query._id},{$set:req.body})
            }else{
                rx=await PublisherDB.create(req.body)
            }
            res.status(200).json(rx);
            break;


        default:
            res.status(405).json({error: `Not FOund`});

    }

}