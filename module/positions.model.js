import positions from "../schema/position.schema.js";
import departments from "../schema/department.schema.js";

class PositionsClass {
    async get(id) {
        if (id) return await positions.findById(id).populate('dep_ref_id');
        else return await positions.find().populate('dep_ref_id');
    }
    async post(data) {
        let {
            _id
        } = await positions.create(data);
        await departments.findByIdAndUpdate(data.dep_ref_id, {
            $push: {
                positions: _id
            }
        });
        return _id;
    }
    // async put(id, data) {
    //     return await positions.updateOne({
    //         _id: id
    //     }, data);
    // }
    async delete(id, data) {
        return await positions.deleteOne({
            _id: id
        });
    }

}
export default new PositionsClass()