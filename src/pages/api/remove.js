import connectDB from "../../utils/features";
import { Task } from "../../models/task";

const handler = async (req, res) => {
  await connectDB();

  let id = req.body.id;
  await Task.findOneAndDelete({
    _id: id,
  });
  let task = await Task.find({});
  res.json({
    success: true,
    data: task,
    message: "Task deleted successfully",
  });
};

export default handler;
