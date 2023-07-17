import connectDB from "../../utils/features";
import { Task } from "../../models/task";
import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  }),
});

export const config = {
  api: {
    bodyParser: false, // Disable automatic body parsing to handle the file upload manually
  },
};
const handler = async (req, res) => {
  console.log("this is my request");
  await connectDB();
  if (req.method === "POST") {
    upload.single("image")(req, res, async (error) => {
      if (error) {
        return res.status(400).json({ error: "File upload failed." });
      }
      const { title, discription } = req.body;

      const { originalname, filename, size } = req.file;
      const image = `uploads/${filename}`;

      try {
        let newOne = await Task.create({
          title,
          discription,
          image,
        });
        res.json({
          newOne,
        });
      } catch (error) {
        res
          .status(500)
          .json({ error: "An error occurred while uploading the file." });
      }
    });
  }

  if (req.method === "GET") {
    let task = await Task.find({});
    res.json({
      task,
    });
  }
};

export default handler;
