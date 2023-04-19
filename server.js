import express from "express";
import config from "config";
const app = express();
const PORT = config.get("port") || 3000;
import("./utils/mongo.js");

import centerRoute from "./router/center.routes.js";
import departmentRoute from "./router/department.routes.js";
import directionsRoute from "./router/directions.routes.js";
import groupsRoute from "./router/groups.routes.js";
import positionRoute from "./router/position.routes.js";
import usersRoute from "./router/users.routes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(centerRoute);
app.use(departmentRoute);
app.use(directionsRoute);
app.use(groupsRoute);
app.use(positionRoute);
app.use(usersRoute);

app.listen(PORT, console.log("Server is running ... " + PORT));



