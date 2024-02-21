import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {

        about: {
            type: String,
        },

        term: {
            type: String,
        },
        home: {
            type: String,
        },



    }

);

module.exports = mongoose.models.cms || mongoose.model("cms", homesliderSchema);
