import {
    Schema,
    model,
    Types
} from "mongoose";

const usersSchema = new Schema({
    pos_ref_id: {
        type: Types.ObjectId,
        required: true,
        ref: "positions"
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
   contact: {
       type: String,
       unique: true,
      required:true
    },
    email: {
        type: String,
        required: true,
    },
    come_date: {
        type: Date,
        default: Date.now(),
        required:true
    },
    left_date: {
          type: Date,
         default: null
    },
    group_ref_id: {
          type: Types.ObjectId,
        ref: "groups"
    }
}, {
    timestamps: {
        createdAt: "create_at",
    },
})
export default model("Users", usersSchema)
