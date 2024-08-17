import {Request, Response, Router} from "express";
const route:Router = Router();

import * as controller from "../../controllers/client/song.controller";

route.get("/:slugTopic", controller.list);

export const songRoutes: Router = route;
