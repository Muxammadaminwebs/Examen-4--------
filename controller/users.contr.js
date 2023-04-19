import user from "../module/users.model.js";
import { sendConfirmationEmail } from "../utils/sender.js";
import jwt from "../utils/jwt.js";
class usersController {
  async find(req, res) {
      const {
          id
      } = req.params;
      res.send(await user.get(id));
  }
  async create(req, res) {
      res.send(await user.post(req.body));
    }
    async login(req, res) {
        const { email, contact } = req.body;
        // console.log(contact);
            sendConfirmationEmail(email, jwt.SIGN(contact))
    }
     async conAdmin(req, res) {
         const { id } = req.params;
         
         res.send({
             token: (id)
             
         })
    }
  async update(req, res) {
      const {
          id
      } = req.params;
      res.send(await user.put(id, req.body));
  }
  async delete(req, res) {
      const {
          id
      } = req.params;
      res.send(await user.delete(id));
  }
}

export default new usersController();