import user from "../schema/user.schema.js";
import positions from "../schema/position.schema.js";
import groups from "../schema/groups.schema.js";

class UsersClass {
  async get(id) {
      if (id) return await user.findById(id);
      else return await user.find().populate("pos_ref_id");
  }
  async post(data) {
      try {
          let {
              _id
          } = await user.create(data);
          await positions.findByIdAndUpdate(data.pos_ref_id, {
              $push: {
                  users: _id
              }
          });
          await groups.findByIdAndUpdate(data.group_ref_id, {
              $push: {
                  users: _id
              }
          });
          return _id
      } catch (er) {
          return er;
      }
  }
  async put(id, data) {
      return await user.updateOne({
          _id: id
      }, data);
  }
  async delete(id, data) {
      return await user.deleteOne({
          _id: id
      });
  }

}
export default new UsersClass()