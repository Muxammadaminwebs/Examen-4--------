import { Router } from "express";
import directions from "../controller/directions.contr.js"
const directionsRoute = Router();

// directionsRoute.get("/departments/directions", directions.find);
// directionsRoute.get("/departments/directions/:id", directions.find);
directionsRoute.post("/departments/directions", directions.create);
directionsRoute.put("/departments/directions/:id", directions.update);
directionsRoute.delete("/departments/directions/:id", directions.delete);

export default directionsRoute;