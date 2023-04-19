import groups from "../schema/groups.schema.js";
import directions from "../schema/directions.schema.js";
class GroupsClass {
    async get(id) {
        if (id) return await groups.findById(id);
        else return await groups.find().populate("dir_ref_id");
    }
    async post(data) {
        let {
            _id
        } = await groups.create(data);
        await directions.findByIdAndUpdate(data.dir_ref_id, {
            $push: {
                groups: _id
            }
        });
        return _id;
    }
    // async put(id, data) {
    //     return await groups.updateOne({
    //         _id: id
    //     }, data);
    // }
    async delete(id, data) {
        return await groups.deleteOne({
            _id: id
        });
    }
}
export default new GroupsClass()