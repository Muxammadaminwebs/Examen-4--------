import departments from "../schema/department.schema.js";
import positions from "../schema/position.schema.js";
import directionsSchema from "../schema/directions.schema.js";
class DepartmentClass {
    async get(id, query) {
        if (query.positions) {
            return await positions.find({
                pos_name: query.positions
            }).populate('dep_ref_id')
        } else if (query.directions) {
            return await directionsSchema.find({
                dir_name: query.directions
            }).populate('dep_ref_id');
        } else {
            if (id) return await departments.findById(id)
            else return await departments.find().populate("center_ref_id");
        }
    }
    async post(data) {
        let {
            _id
        } = await departments.create(data);
        // await departments.findByIdAndUpdate(data.center_ref_id, {
        //     $push: {
        //         departments: _id
        //     }
        // });
        return _id;
    }
    // async put(id, data) {
    //     return await departments.updateOne({
    //         _id: id
    //     }, data);
    // }
    async delete(id, data) {
        return await departments.deleteOne({
            _id: id
        });
    }
}
export default new DepartmentClass()