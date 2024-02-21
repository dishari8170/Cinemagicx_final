import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {

        dp: {
            type: String,
        },

        name: {
            type: String,
        },

        data:{

            type:String,

            default :"{}"

        }



    }

);

module.exports = mongoose.models.CategoriesDB || mongoose.model("CategoriesDB", homesliderSchema);
