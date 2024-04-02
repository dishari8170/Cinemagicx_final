import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
VIDEOID :String,
TITLE :String, 
PRODUCER :String, 
DIRECTOR :String, 
DURATION :String, 
AWARDS :String, 
RATING :String, 
YEAR :String, 
CAST :String, 
SESSION :String, 
LANGUAGE :String, 
CATEGORY :String,
        xstar: {
            type: Number,
            default: 5
        },
DESCRIPTION :String,
BNR :String,
APP :String,
        GENRE :String,
        TRAILER :String,
SERIES:String


    },{
        timestamps:true
    }

);

module.exports = mongoose.models.video || mongoose.model("video", UserSchema);


