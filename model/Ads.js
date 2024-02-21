import mongoose from "mongoose";

const homesliderSchema = new mongoose.Schema(
    {

        dp: {
            type: String,
        },

    

        adv: {
            type: String,
        },


        name: {
            type: String,

        }, height: {
            type: String,
        },
        link: {

            type: String
        }


    }
);

module.exports = mongoose.models.Ads || mongoose.model("Ads", homesliderSchema);
