import { Router } from "express";
import departments from "../controller/department.contr.js"
import directions from "../controller/directions.contr.js";
import positions from "../controller/position.contr.js";
const departmentsRoute = Router();

departmentsRoute.get("/departments", departments.find);
departmentsRoute.get("/departments/positions", positions.find);
departmentsRoute.get("/departments/directions", directions.find);
departmentsRoute.get("/departments/positions/:id", positions.find);
departmentsRoute.get("/departments/directions/:id", directions.find);
departmentsRoute.get("/departments/:id", departments.find);

departmentsRoute.post("/departments", departments.create);
departmentsRoute.put("/departments/:id", departments.update);
departmentsRoute.delete("/departments/:id", departments.delete);

export default departmentsRoute;