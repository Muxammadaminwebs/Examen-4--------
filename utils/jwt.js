

import jwt from "jsonwebtoken";
import config from "config";

export default {
    SIGN: (payload) => {
        return jwt.sign({
            payload
        }, config.get("secret"), {
            expiresIn: "300000000000000000",
        });
    },
    VERIFY: (token) => {
        try {
            if (jwt.verify(token, config.get("secret")) instanceof Error) return 0;
            else return jwt.verify(token, config.get("secret"));
        } catch (error) {
            return 0;
        }
    },

};











// import jwt from 'jsonwebtoken';
// import config from "config";

// const secretKey = config.get("secret")
// export default {
//     SIGN: (payload) => {
//         return jwt.sign(payload, secretKey)
//     },
//     VERIFY: (token) => {
//         return jwt.verify(token, secretKey)
//     }
// }