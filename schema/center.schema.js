import { Schema, model, Types } from "mongoose";

const centerSchema = new Schema({
    name: {
        type: String,
        required: true,
        uneque: true,
    },
    address: {
        type: String,
        required : true,
    },
    open_date: {
        type: Date,
        default: Date.now(),
    },
    close_at: {
        type: Date,
        default: null,
    }
    
}, {
      timestamps: {
          createdAt: "create_at",
      },
}
)
export default model("centera", centerSchema)
