const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    ImageURL:String,
    VideoURL:String
});


const Video = mongoose.model("VideoURL", VideoSchema);
module.exports = Video;