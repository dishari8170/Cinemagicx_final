import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            default:"Anonymous"
        },

        rev: {
            type: String,
        },
        producer: {
            type: String,
        },
        vid:{
            type: mongoose.Schema.Types.ObjectId,
        },

        vbnr:{
            type: String,
        },

        vname:{
            type: String,
        },


        star: {
            type: Number,
            default: 5
        },






    }

);

module.exports = mongoose.models.revx || mongoose.model("revx", homesliderSchema);
