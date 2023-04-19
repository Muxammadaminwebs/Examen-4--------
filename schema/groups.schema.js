import {
    Schema,
    model,
    Types
} from "mongoose";

const groupsSchema = new Schema({
    dir_ref_id: {
        type: Types.ObjectId,
        required: true,
        ref: "directions"
    },
    gr_number: {
        type: Number,
        required: true,
    },
    begin_date: {
        type: Date,
        default: Date.now(),
         required:true
    },
    end_date: {
        type: Date,
        default: null,
    }
}, {
    timestamps: {
        createdAt: "create_at",
    },
})
export default model("groups", groupsSchema)
