import mongoose from "mongoose";

const homesliderSchema = new mongoose.Schema(
    {
        data: {
            type:String,
            default:"{}"
        },
        dp:String,


    }
);

module.exports = mongoose.models.More || mongoose.model("More", homesliderSchema);
