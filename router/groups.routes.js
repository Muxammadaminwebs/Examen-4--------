import { Router } from "express";
import groups from "../controller/groups.contr.js"
const groupsRoute = Router();

groupsRoute.get("/groups", groups.find);
groupsRoute.get("/groups/:id", groups.find);
groupsRoute.post("/groups", groups.create);
groupsRoute.put("/groups/:id", groups.update);
groupsRoute.delete("/groups/:id", groups.delete);

export default groupsRoute;