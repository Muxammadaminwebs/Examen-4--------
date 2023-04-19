import user from "../schema/user.schema.js";
import positions from "../schema/position.schema.js";
import groups from "../schema/groups.schema.js";
import check from "../schema/check.schema.js";

class CheckClass {
  async get(id) {
      if (id) return await check.findById(id).populate("user_ref_id").populate("gr_ref_id");
      else return await check.find().populate("gr_ref_id").populate("user_ref_id");
  }
  async post(data) {
      try {
          let {
              _id
          } = await check.create(data);
        //   await positions.findByIdAndUpdate(data.pos_ref_id, {
        //       $push: {
        //           users: _id
        //       }
        //   });
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
export default new CheckClass()