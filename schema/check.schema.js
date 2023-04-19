import { Schema, model, Types } from "mongoose";

const checkSchema = new Schema({
   gr_ref_id: {
       type: Types.ObjectId,
       required: true,
       ref: "groups"
   },
   user_ref_id: {
       type: Types.ObjectId,
       required: true,
       ref: "Users"
    },
    not_in_class: {
        type: String,
        required:true
   }
}, {
      timestamps: {
          createdAt: "create_at",
      },
}
)
export default model("check", checkSchema)
