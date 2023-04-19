import {
    Schema,
    model,
    Types
} from "mongoose";

const positionsSchema = new Schema({
    dep_ref_id: {
        type: Types.ObjectId,
        required: true,
        ref: "departments"
    },
    pos_name: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true
    }
}, {
    timestamps: {
        createdAt: "create_at",
    },
})
export default model("positions", positionsSchema)
