import dbConnect from "@/lib/dbConnect";
import video from '@/model/video'
import vdoad from '@/model/vdoad'

export default async function handler(req, res) {


    await dbConnect()

    switch (req.method) {

        case 'GET':

            if (req.query.on==="_id") {

                if (req.query.type){

                    const rv = await video.findOne({_id: req.query.search});

                    res.status(200).json(rv);

                } else {


                    const rv = await video.findOne({_id: req.query.search});

                    if (rv){
                        const ads=   await    vdoad.aggregate([{$match:{

                                credit:{ $ne: 0 }



                            }},{ $sample: { size: 1 } }])
                        res.status(200).json({vdo:rv,ads:ads[0]});

                        return;
                    }

                    res.status(200).json(rv);

                    return;
                }

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

            dox.data = await video.find(searchQuery, pro, queryOptions);

            dox.total= await video.countDocuments(searchQuery);
            res.status(200).json(dox);
            break;
        case 'DELETE':
            const gr=await video.deleteOne({_id:req.query._id})
            res.status(200).json(gr);
            break;
        case 'POST':
            let rx="";
            if (req.body._id){
                rx=await video.updateOne({_id:req.body._id},{$set:req.body})
            }else{
                rx=await video.create(req.body)
            }
            res.status(200).json(rx);
            break;


        default:
            res.status(405).json({error: `Not FOund`});

    }

}