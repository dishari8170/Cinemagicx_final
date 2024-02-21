const path = require('path');

const multer = require("multer");

export const config = {
    api: {
        bodyParser: false,
    },
};


export default async function handler(req, res) {
    const { method } = req;

    

    const upload = multer({
        storage: multer.diskStorage({
            destination: "public/uploads",
            filename: function (req, file, cb) {
                // let extArray = file.mimetype.split("/");
                // let extension = extArray[extArray.length - 1];
                // cb(null, file.fieldname + "-" + Date.now() + "." + extension);
                cb(null, ""+ Date.now() + path.extname(file.originalname))
            },
        }),
    }).any();

    switch (method) {
        case "POST":
            try {


                upload(req, res, async function (error) {
                    if (error) {
                        res.status(200).send({
                            status: "error",
                            message: error,
                        });
                        return;
                    }

                    res.status(200).json({name: req.files[0].filename});


                })
            } catch (e) {

                console.log(e);

            }


    }
}
