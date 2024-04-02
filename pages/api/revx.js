import dbConnect from "@/lib/dbConnect";
import revx from "@/model/revx";
import video from "@/model/video";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":

            try {




            // let  user = await revx.find(req.query)

                let user = await revx.aggregate(
                    [
                        {
                            $lookup: {
                                from: 'videos',
                                localField: 'vid',
                                foreignField: '_id',
                                as: 'user'
                            }
                        },
                        {
                            $unwind :"$user"
                        },
                        {
                            $project :{
                                _id:"$_id",
                                vid:"$user._id",
                                name:"$name",
                                rev:"$rev",
                                star:"$star",
                                TITLE:"$user.TITLE",
                                BNR:"$user.BNR",
                                xstar:"$user.xstar",
                                PRODUCER:"$user.PRODUCER"
                            }
                        },

                    ]
                )


                res.status(200).json(user);
                break;

            }catch (e) {
                res.status(200).json({});
            }







        case "DELETE":

            const userx = await revx.deleteOne({_id:req.query.id})


            res.status(200).json(userx);

            break;

        case "POST":

            try {
                const rv = await video.findOne({_id: req.body.id});


                    if (rv) {

                        let fgx={}

                        fgx['rev']=req.body.rev;
                        fgx['star']=req.body.star;

                        // fgx['xstar'] = rv["star"];
                        // fgx['producer']=rv["PRODUCER"];
                        // fgx['vbnr']=rv["BNR"];
                        // fgx['vbnr']=rv["BNR"];
                        // fgx['vname']=rv["TITLE"];

                        fgx['vid']=req.body.id;

                        if (req.body.name){
                            fgx['name']=req.body.name;
                        }


                        const user = await revx.create(fgx);



                        res.status(200).json({
                            success: true,
                            message: "Added Successfully ",
                            user:user

                        });
                        return;


                    } else {

                        res.status(200).json({
                            success: false,
                            message: "kindly check you input data"
                        })
                    }


            } catch (error) {
                res.status(200).json({ success: false, data: error });
            }
            break;


    }

}