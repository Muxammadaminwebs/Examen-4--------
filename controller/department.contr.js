import departments from "../module/department.model.js";
import userSchema from "../schema/user.schema.js";
import jwt from "../utils/jwt.js";
class departmentController {



  async find(req, res) {
    const {token}=req.headers
    const { id } = req.params;
    let adminToken=jwt.VERIFY(token).payload;
    let isAdmin = userSchema.find({ contact: adminToken })
    // console.log(isAdmin);
    // console.log(adminToken)
    if(!adminToken){
      res.send({status:404, message:"Token mavjud emas"});
    }else if(adminToken){
    res.send(await departments.get(id, req.query));
    }else{
      res.send({status:404, message:"Sizda bunga ruxsat yo'q yoki Tokenda xatolik"});
    }
  }
//     async find(req, res) {
//       const { id } = req.params;
//       const { token } = req.headers
// let adminka = jwt.VERIFY(token)
// console.log(jwt.VERIFY(token));
      
//       res.send(await departments.get(id, req.query));
//     }
    async create(req, res) {
      res.send(await departments.post(req.body));
    }
    async update(req, res) {
      const {
        id
      } = req.params;
      res.send(await departments.put(id, req.body));
    }
    async delete(req, res) {
      const {
        id
      } = req.params;
      res.send(await departments.delete(id));
    }
}

export default new departmentController();