import {
    Schema,
    model,
    Types
} from "mongoose";

const directionsSchema = new Schema({
    dep_ref_id: {
        type: Types.ObjectId,
        required: true,
        ref: "departments"
    },
    der_name: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    end_date: {
        type: Date,
        default: null
    }

}, {
    timestamps: {
        createdAt: "create_at",
    },
})
export default model("directions", directionsSchema)