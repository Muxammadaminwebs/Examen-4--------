import { Router } from "express";
import center from "../controller/center.contr.js"
const centerRoute = Router();

centerRoute.get("/centers", center.find);
centerRoute.get("/centers/:id", center.find);
centerRoute.post("/centers", center.create);
centerRoute.put("/centers/:id", center.update);
centerRoute.delete("/centers/:id", center.delete);

export default centerRoute;