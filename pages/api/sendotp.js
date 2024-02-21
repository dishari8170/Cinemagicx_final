
import posts from "@/model/posts"
import dbConnect from "@/lib/dbConnect";
export default async function handler(req, res) {
    await dbConnect();

    // const {method}=req;


    switch (req.method) {
        case "GET":{
            // const r = await posts.find({},{dp:1,caption:1})
            // // const r= await Gallery.deleteMany()
            // return res.status(200).json(r)
            //
            //
            //

            const r = await posts.aggregate([

                // {
                //     $lookup:{
                //         from:"users",
                //         localField:"userid",
                //         foreignField:"_id",
                //         as:"user_data"
                //
                //     }
                //
                // },

                {
                    $lookup: {
                        from: 'users',
                        localField: 'userid',
                        foreignField: '_id',
                        as: 'user'
                    }
                },
                {
                    $unwind: '$user'
                },



            ])
            return res.status(200).json(r);
        }












        // case "POST":{
        //     const r = await posts.create({dp:req.body.dp})
        //     return res.status(200).json(r)
        //
        //
        //
        // }
        case "DELETE":{
            const r = await posts.deleteOne({_id:req.query.photoid})
            // const r= await Gallery.deleteMany()
            return res.status(200).json(r)``

        }
        default:{
            return res.status(200).json("invalid")
        }


    }






}






// photo -->quntity ->unlimited | ek--> ek
//fetch --/->uniq id