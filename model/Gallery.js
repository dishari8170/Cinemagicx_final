import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {

        dp: {
            type: String,
        },

        userid: {
            type: String,
        },



    }

);

module.exports = mongoose.models.Gallery || mongoose.model("Gallery", homesliderSchema);
