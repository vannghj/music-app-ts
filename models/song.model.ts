import mongoose from "mongoose";
const songSchema = new mongoose.Schema(
    {
        title: String,
        status: String,
        description: String,
        avatar: String,
        singerId: String,
        topicId: String,
        like: Number,
        lyrics: String,
        audio: String,
        slug: String,
        deleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: Date,
    }, {
        timestamps: true
    });

const Song = mongoose.model('Song', songSchema, "songs");

export default  Song;