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

module.exports = mongoose.models.LanguageDB || mongoose.model("LanguageDB", homesliderSchema);
