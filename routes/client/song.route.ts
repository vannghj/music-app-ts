import {Request, Response, Router} from "express";
const route:Router = Router();

import * as controller from "../../controllers/client/song.controller";

route.get("/:slugTopic", controller.list);
route.get("/detail/:slugTopic", controller.detail);
route.patch("/like/:typeLike/:idSong", controller.like);
route.patch("/favorite/:typeFavorite/:idSong", controller.favorite);

export const songRoutes: Router = route;
