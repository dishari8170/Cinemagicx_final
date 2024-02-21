import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {

        number: {
            type: String,
        },

        otp: {
            type: String,
        },

    }

);

module.exports = mongoose.models.OTPDB || mongoose.model("OTPDB", homesliderSchema);
