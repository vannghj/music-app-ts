import {Request, Response} from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";

export const list = async (req:Request, res: Response) => {
    const topic = await Topic.findOne({
        slug: req.params.slugTopic,
        status:"active",
        deleted: false,
    });
    const songs = await Song.find({
        topicId: topic.id,
        status:"active",
        deleted: false
    }).select("avatar title slug singerId like");
    for( const song of songs) {
        const infoSinger = await Singer.findOne({
            _id: song.singerId,
            status: "active",
            deleted: false
        });
        song["infoSinger"] = infoSinger;
    }
    res.render("client/pages/songs/list", {
        pageTitle: topic.title,
        songs: songs,
        topic:topic
    });
}
export const detail = async (req:Request, res: Response) => {
    const song = await Song.findOne({
        slug: req.params.slugTopic,
        deleted: false,
        status: "active",
    })
    const topic = await Topic.findOne({
        _id: song.topicId,
        deleted: false,
        status:"active",
    }).select("fullName");
    const singer = await Singer.findOne({
        _id: song.singerId,
        deleted: false,
        status:"active",
    }).select("fullName");
    res.render("client/pages/songs/detail", {
        pageTitle: "chi tiet bai hat",
        song: song,
        topic: topic,
        singer: singer
    });
}

export const like = async (req:Request, res: Response) => {
    const idSong: string = req.params.idSong;
    const typeLike: string = req.params.typeLike;
    const song = await Song.findOne({
        _id: idSong,
        status:"active",
        deleted:"false",
    });
    const newLike = typeLike == "like" ? song.like + 1: song.like - 1;
    await Song.updateOne({
        _id: idSong,
    }, {
        like: newLike
    })
    res.json({
        code: 200,
        message: "thanh cong!",
        like: newLike,
    })
}