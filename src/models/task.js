import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  discription: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     require: true,
  //     ref: "User",
  //   },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Task = models.Task || model("Task", taskSchema);
