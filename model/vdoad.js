import mongoose from "mongoose";

const homesliderSchema = new mongoose.Schema(
    {




        name: {
            type: String,

        },

        credit:{
            type: Number,

            default: 0


        },

        vid:String,

        time:String,


        adv:{
            type:String
        }

    }
);

module.exports = mongoose.models.vdoad || mongoose.model("vdoad", homesliderSchema);
