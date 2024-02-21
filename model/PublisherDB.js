import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {

        email: {
            type: String,
        },

        phone: {
            type: String,
        },

        name: {
            type: String,
        },


        password: {
            type: String,
        },

    }

);

module.exports = mongoose.models.PublisherDB || mongoose.model("PublisherDB", homesliderSchema);
