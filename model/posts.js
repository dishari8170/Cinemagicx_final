import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        "userid":String,
        "dp":String,
        "caption":String,
    },{
        timestamps:true
    }


);

module.exports = mongoose.models.posts || mongoose.model("posts", UserSchema);


