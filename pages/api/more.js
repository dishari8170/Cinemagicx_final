import dbConnect from "@/lib/dbConnect";
import More from '@/model/More'

export default async function handler(req, res) {


    await dbConnect()


    switch (req.method) {

        case 'GET':

            if (req.query.on==="_id"){
                const rv= await More.findOne({_id:req.query.search});

                res.status(200).json(rv);
                break;

            }
            const dox = {};
            const queryOptions = {};
            if (req.query.sort) {
                queryOptions.sort = { [req.query.sort]: parseInt(req.query.mode) };
            }
            if (req.query.limit) {
                queryOptions.skip = parseInt(req.query.skip) || 0;
                queryOptions.limit = parseInt(req.query.limit);
            }
            let yop={}
            yop[req.query.search]=req.query.on
            const searchQuery ={};
            if (req.query.search){
                searchQuery[req.query.on]={ $regex: new RegExp(req.query.search, 'i') };
            }
            let pro= {};
            if (req.query.pro){

                req.query.pro.split(",").map((op,u)=>{
                    pro[op]=1;
                })

            }


            //Use Only if Sencitive  Ex- Pass
            // if (Object.entries(pro).length<1){
            //
            //     dox.data = []
            //
            //     dox.total= 0;
            //     res.status(200).json(dox);
            //     break;
            //
            // }

            dox.data = await More.find(searchQuery, pro, queryOptions);

            dox.total= await More.countDocuments(searchQuery);
            res.status(200).json(dox);
            break;
        case 'DELETE':
            const gr=await More.deleteOne({_id:req.query._id})
            res.status(200).json(gr);
            break;
        case 'POST':
            let rx="";
            if (req.query._id){
                rx=await More.updateOne({_id:req.query._id},{$set:req.body})
            }else{
                rx=await More.create(req.body)
            }
            res.status(200).json(rx);
            break;


        default:
            res.status(405).json({error: `Not FOund`});

    }

}