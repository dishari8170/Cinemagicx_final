import dbConnect from "@/lib/dbConnect";
import CategoriesDB from '@/model/CategoriesDB'

export default async function handler(req, res) {


    await dbConnect()

    switch (req.method) {

        case 'GET':

            if (req.query.on==="_id"){
             const rv= await CategoriesDB.findOne({_id:req.query.search});

             res.status(200).json(rv);
             return;

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


            dox.data = await CategoriesDB.find(searchQuery, pro, queryOptions);
            dox.total= await CategoriesDB.countDocuments(searchQuery);
            res.status(200).json(dox);
            break;
        case 'DELETE':
            const gr=await CategoriesDB.deleteOne({_id:req.query._id})
            res.status(200).json(gr);
            break;
        case 'POST':
            let rx="";
            if (req.query._id){

                rx=await CategoriesDB.updateOne({_id:req.query._id},{$set:req.body},{upsert:true})
            }else{
                rx=await CategoriesDB.create(req.body)
            }
            res.status(200).json({r:rx,x:req.body});
            break;


        default:
            res.status(405).json({error: `Not FOund`});

    }

}