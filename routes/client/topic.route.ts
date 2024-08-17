import {Request, Response, Router} from "express";
const route:Router = Router();

import * as controller from "../../controllers/client/topic.controller";

route.get("/", controller.topics);

export const topicRoutes: Router = route;
