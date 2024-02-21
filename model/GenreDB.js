import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {

        dp: {
            type: String,
        },

        name: {
            type: String,
        },



    }

);

module.exports = mongoose.models.GenreDB || mongoose.model("GenreDB", homesliderSchema);
