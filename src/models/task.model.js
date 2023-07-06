import mongoose from "mongoose";
import moongose from "mongoose";

const taskSchema = new moongose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Task", taskSchema)