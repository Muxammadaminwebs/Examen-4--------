import {Router} from "express";
import User from "../controller/users.contr.js"
import users from "../schema/user.schema.js";
import jwt from "../utils/jwt.js";
const userRoute = Router();



async function checkToken(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            message: "Xatolik: Kirish uchun token kerak yoki sizning xuquqingiz yo'q"
        });
    }
    try {
        let {contact} = await users.findOne({
            contact: jwt.VERIFY(token).id
        });
        if (contact == jwt.VERIFY(token).id) {
            next();
        }
    } catch (error) {
        return res.status(401).json({
            message: "Xatolik: Noto'g'ri yoki amalga oshirilmagan token"
        });
    }
}



userRoute.get("/users", checkToken, User.find);
userRoute.get("/pass/code/:id", User.conAdmin);
userRoute.post("/admin/login", User.login);
userRoute.get("/users/:id", User.find);
userRoute.post("/users", User.create);
userRoute.put("/users/:id", User.update);
userRoute.delete("/users/:id", User.delete);

export default userRoute;